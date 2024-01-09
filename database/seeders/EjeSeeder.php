<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EjeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('ejes')->delete();
        $ejes = [
            [
                'nombre_eje' =>  '1. Económico'
            ],
            [
                'nombre_eje'  =>  '2. Social'
            ],
            [
                'nombre_eje'  =>  '3. Seguridad Integral'
            ],
            [
                'nombre_eje'  =>  '4. Transición Ecológica'
            ],
            [
                'nombre_eje'  =>   '5. Institucional'
            ]
        ];

        DB::table('ejes')->insert($ejes);
    }
}
