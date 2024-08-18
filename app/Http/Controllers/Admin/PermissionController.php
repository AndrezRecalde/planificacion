<?php

namespace App\Http\Controllers\Admin;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    function getPermissions(): JsonResponse
    {
        $permissions = Permission::get(['id', 'name', 'guard_name']);

        return response()->json(['status' => HTTPStatus::Success, 'permissions' => $permissions], 200);
    }
}
