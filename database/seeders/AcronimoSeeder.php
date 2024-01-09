<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AcronimoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('acronimos')->delete();
        $acronimos = [
            [
                'nombre_acronimo'    =>  'Gobernantes',
                'siglas'       =>  'G',
                'activo'       =>   1
            ],
            [
                'nombre_acronimo'    =>  'Habilitantes asesores',
                'siglas'       =>  'HA',
                'activo'       =>  1
            ],
            [
                'nombre_acronimo'    =>  'Habilitantes apoyos',
                'siglas'       =>  'HAP',
                'activo'       =>  1
            ],
            [
                'nombre_acronimo'    =>  'Agregadores de valor',
                'siglas'       =>  'AV',
                'activo'       =>  1
            ],
        ];

        DB::table('acronimos')->insert($acronimos);
    }
}
