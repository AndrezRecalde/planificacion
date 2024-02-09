<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class InstitucionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('instituciones')->delete();
        $instituciones = [
            [
                'nombre_institucion' => 'Gobierno Autónomo Descentralizado de la Provincia de Esmeraldas',
                'siglas' =>  'GADPE',
                'ruc' => '0800784118001',
                'activo'  => 1,
                'telefono'  => '(06) 272-1433',
                'gad_id'    => 1
            ],
            [
                'nombre_institucion' => 'Unidad de Asistencia Médica, Desarrollo Social y Cultural',
                'siglas' =>  'UNAMYDESC',
                'ruc' => '0860044290001',
                'activo'  => 1,
                'telefono'  => '(06) 272-1433',
                'gad_id'    => 1
            ],
            [
                'nombre_institucion' => 'ECODEP',
                'siglas' =>  'ECODEP',
                'ruc' => '0801010101001',
                'activo'  => 1,
                'telefono'  => '(06) 272-1433',
                'gad_id'    => 1
            ]
        ];

        DB::table('instituciones')->insert($instituciones);
    }
}
