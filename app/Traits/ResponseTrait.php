<?php

namespace App\Traits;

use App\Enums\HTTPStatus;
use Illuminate\Http\JsonResponse;

trait ResponseTrait
{

    public function responseSuccess(array $data = [], string $message = '', $status_code = JsonResponse::HTTP_OK): JsonResponse
    {
        return response()->json([
            'status' => HTTPStatus::Success,
            'msg' => $message,
            'data' => $data,
        ], $status_code);
    }

    public function responseError($msg, $status_code = JsonResponse::HTTP_BAD_REQUEST): JsonResponse
    {
        return response()->json([
            'status' => HTTPStatus::Error,
            'msg' => $msg,
        ], $status_code);
    }
}
