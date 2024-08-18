<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Permission;
use App\Models\User;
use Carbon\Carbon;

class RevokeExpiredPermissions extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'permissions:revoke-expired';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Revoke all expired permissions';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        // Encuentra todos los registros en model_has_permissions que han expirado
        $expiredPermissions = DB::table('model_has_permissions')
            ->where('expires_at', '<', Carbon::now())
            ->get();

        // Recorre los permisos expirados y revócalos
        foreach ($expiredPermissions as $expiredPermission) {
            $user = User::find($expiredPermission->model_id);
            $permission = Permission::find($expiredPermission->permission_id);

            if ($user && $permission) {
                $user->revokePermissionTo($permission);
                $this->info("Revoked permission '{$permission->name}' from user '{$user->name}'");
            }
        }

        return Command::SUCCESS;
    }
}
