<?php

namespace App\Http\Controllers\Admin;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\ApplicationRequest;
use App\Models\Application;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ApplicationController extends Controller
{
    function show(): JsonResponse
    {
        $application = Application::first(['nombre_app', 'admin_email', 'copyright', 'logo_url', 'color']);

        return response()->json(['status' => HTTPStatus::Success, 'application' => $application], 200);
    }

    function update(ApplicationRequest $request, int $id): JsonResponse
    {
        $application = Application::find($id);

        try {
            if ($application) {

                if ($request->hasFile('logo_url')) {
                    $filename = $application->logo_url;

                    if ($filename) {
                        Storage::disk('public')->delete($filename);
                    }

                    $application->fill($request->validated());
                    $application->logo_url = $request->file('logo_url');
                    $filename = $application->logo_url->getClientOriginalName();
                    $save_path = '/app/logo/';
                    $public_path = $save_path . $filename;
                    $path = Storage::putFileAs(
                        'public' . $save_path,
                        $application->logo_url,
                        $filename
                    );

                    if (!$path) {
                        DB::rollback();
                        return response()->json(['status' => HTTPStatus::Error, 'msg' => 'Error al Actualizar'], 500);
                    }
                    $application->logo_url = $public_path;
                    $resp = $application->save();
                } else {
                    $resp = $application->update(array_filter($request->validated()));
                }
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }

            if ($resp) {
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }
}
