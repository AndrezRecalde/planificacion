<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('gads')->delete();
        $gads = [
            [
                'tipo_gad' => 'Provincial'
            ],
            [
                'tipo_gad'  =>  'Cantonal'
            ],
            [
                'tipo_gad'  =>  'Parroquial'
            ]
        ];

        DB::table('gads')->insert($gads);
    }
}
