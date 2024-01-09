<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DepartamentoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('departamentos')->delete();

        $departamentos = [
            [
                'nombre_departamento'   =>  'Prefectura',
                'siglas'                =>  'PR',
                'extension'             =>  '102 - 103',
                'activo'                =>  1,
                'institucion_id'        =>  1,
                'acronimo_id'           =>  1
            ],
            [
                'nombre_departamento'   =>  'Viceprefectura',
                'siglas'                =>  'VP',
                'extension'             =>  '115 - 116',
                'activo'                =>  1,
                'institucion_id'        =>  1,
                'acronimo_id'           =>  1
            ],
            [
                'nombre_departamento'   =>  'Gestión de Coordinación Institucional',
                'siglas'                =>  'GCI',
                'extension'             =>  '152 - 153',
                'activo'                =>  1,
                'institucion_id'        =>  1,
                'acronimo_id'           =>  1
            ],
            [
                'nombre_departamento'   =>  'Gestión de Auditoría Interna',
                'siglas'                =>  'GAI',
                'extension'             =>  '143 - 166',
                'activo'                =>  1,
                'institucion_id'        =>  1,
                'acronimo_id'           =>  1
            ],
            [
                'nombre_departamento'   =>  'Gestión de Asesoría Legal',
                'siglas'                =>  'GAL',
                'extension'             =>  '156 - 157',
                'activo'                =>  1,
                'institucion_id'        =>  1,
                'acronimo_id'           =>  1
            ],
            [
                'nombre_departamento'   =>  'Gestión de Comunicación Social',
                'siglas'                =>  'GCS',
                'extension'             =>  '149 - 151',
                'activo'                =>  1,
                'institucion_id'        =>  1,
                'acronimo_id'           =>  1
            ],
            [
                'nombre_departamento'   =>  'Gestión de Planificación',
                'siglas'                =>  'GP',
                'extension'             =>  '135',
                'activo'                =>  1,
                'institucion_id'        =>  1,
                'acronimo_id'           =>  1
            ],
            [
                'nombre_departamento'   =>  'Dirección de Acción Social, inclusión y participación',
                'siglas'                =>  'DASIP',
                'extension'             =>  '155',
                'activo'                =>  1,
                'institucion_id'        =>  1,
                'acronimo_id'           =>  1
            ],
            [
                'nombre_departamento'   =>  'Unidad de Gestión de Calidad',
                'siglas'                =>  'GC',
                'extension'             =>  '152',
                'activo'                =>  1,
                'institucion_id'        =>  1,
                'acronimo_id'           =>  1
            ],
            [
                'nombre_departamento'   =>  'Gestión de Secretaría General',
                'siglas'                =>  'SG',
                'extension'             =>  '127 - 168 - 207',
                'activo'                =>  1,
                'institucion_id'        =>  1,
                'acronimo_id'           =>  1
            ],
            [
                'nombre_departamento'   =>  'Gestión de Tecnologías de la Información y Comunicación',
                'siglas'                =>  'GTIC',
                'extension'             =>  '132 - 133 - 165',
                'activo'                =>  1,
                'institucion_id'        =>  1,
                'acronimo_id'           =>  1
            ],
            [
                'nombre_departamento'   =>  'Gestión de Talento Humano',
                'siglas'                =>  'GTH',
                'extension'             =>  '107 - 108 - 109 - 112',
                'activo'                =>  1,
                'institucion_id'        =>  1,
                'acronimo_id'           =>  1
            ],
            [
                'nombre_departamento'   =>  'Gestión Administrativa',
                'siglas'                =>  'GAD',
                'extension'             =>  '122',
                'activo'                =>  1,
                'institucion_id'        =>  1,
                'acronimo_id'           =>  1
            ],
            [
                'nombre_departamento'   =>  'Gestión Financiera',
                'siglas'                =>  'GF',
                'extension'             =>  '117',
                'activo'                =>  1,
                'institucion_id'        =>  1,
                'acronimo_id'           =>  1
            ],
            [
                'nombre_departamento'   =>  'Gestión de Fiscalización',
                'siglas'                =>  'GFZ',
                'extension'             =>  '113 - 114',
                'activo'                =>  1,
                'institucion_id'        =>  1,
                'acronimo_id'           =>  1
            ],
            [
                'nombre_departamento'   =>  'Gestión de Compras Públicas',
                'siglas'                =>  'UCP',
                'extension'             =>  '158 - 159',
                'activo'                =>  1,
                'institucion_id'        =>  1,
                'acronimo_id'           =>  1
            ],
            [
                'nombre_departamento'   =>  'Gestión de Infraestructura Víal',
                'siglas'                =>  'GIV',
                'extension'             =>  '129 - 131',
                'activo'                =>  1,
                'institucion_id'        =>  1,
                'acronimo_id'           =>  1
            ],
            [
                'nombre_departamento'   =>  'Gestión de Fomento y Desarrollo Productivo',
                'siglas'                =>  'GFODEPRO',
                'extension'             =>  '142 - 144',
                'activo'                =>  1,
                'institucion_id'        =>  1,
                'acronimo_id'           =>  1
            ],
            [
                'nombre_departamento'   =>  'Gestión de Articulación Cooperación e Internacionalización del Territorio',
                'siglas'                =>  'GACIT',
                'extension'             =>  '162 - 163',
                'activo'                =>  1,
                'institucion_id'        =>  1,
                'acronimo_id'           =>  1
            ],
            [
                'nombre_departamento'   =>  'Gestión de Cuenca, Riego y Drenaje',
                'siglas'                =>  'GCRD',
                'extension'             =>  '136 - 137',
                'activo'                =>  1,
                'institucion_id'        =>  1,
                'acronimo_id'           =>  1
            ],
            [
                'nombre_departamento'   =>  'Gestión Ambiental',
                'siglas'                =>  'GA',
                'extension'             =>  '133 - 139',
                'activo'                =>  1,
                'institucion_id'        =>  1,
                'acronimo_id'           =>  1
            ],
        ];
        DB::table('departamentos')->insert($departamentos);
    }
}
