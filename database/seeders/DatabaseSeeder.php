<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        $this->call(ApplicationSeeder::class);
        $this->call(GadSeeder::class);
        $this->call(AdministrativoSeeder::class);
        $this->call(AcronimoSeeder::class);
        $this->call(InstitucionSeeder::class);
        $this->call(DepartamentoSeeder::class);
        $this->call(UsuarioSeeder::class);
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
}
