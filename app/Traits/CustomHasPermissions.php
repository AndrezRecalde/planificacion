<?php

namespace App\Traits;

use Carbon\Carbon;
use Spatie\Permission\Models\Permission;

trait CustomHasPermissions
{
    public function hasPermissionTo($permission, $guardName = null)
    {
        $permission = $this->getPermissionClass()->findByName($permission, $guardName ?: $this->getDefaultGuardName());

        $permissionAssignment = $this->permissions()->where('permission_id', $permission->id)->first();

        if ($permissionAssignment && $permissionAssignment->pivot->expires_at && Carbon::now()->greaterThan($permissionAssignment->pivot->expires_at)) {
            return false;
        }

        return $this->permissions->contains('id', $permission->id);
    }
}
