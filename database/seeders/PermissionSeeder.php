<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Permission::truncate();

        /* Permissions: ADMIN */
        Permission::create(['name' => 'get:instrumentos']);
        Permission::create(['name' => 'store:instrumentos']);
        Permission::create(['name' => 'update:instrumentos']);
        Permission::create(['name' => 'delete:instrumentos']);


    }
}
