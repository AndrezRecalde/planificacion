<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ApplicationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('applications')->delete();
        $applications = [
            [
                'nombre_app'        =>  'SUKHA',
                'admin_email'       =>  'admin@gadpe.gob.ec',
                'copyright'         =>  'Los programas, datos e información están protegidos por copyright © SUKHA - GADPE',
                'logo_url'          =>  '/app/logo/logosukha.png',
                'color'             =>  '#003768'
            ],
        ];

        DB::table('applications')->insert($applications);
    }
}
