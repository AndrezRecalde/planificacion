<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdministrativoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('administrativos')->delete();
        $administrativos = [
            [
                'inicio_periodo'    =>  2019,
                'fin_periodo'       =>  2022,
                'maxima_autoridad'  =>  'María Roberta Zambrano Ortíz',
                'activo'            =>  0
            ],
            [
                'inicio_periodo'    =>  2022,
                'fin_periodo'       =>  2026,
                'maxima_autoridad'  =>  'María Roberta Zambrano Ortíz',
                'activo'            =>  1
            ]
        ];

        DB::table('administrativos')->insert($administrativos);
    }
}
