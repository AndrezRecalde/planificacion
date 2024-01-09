<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class UsuarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::truncate();
        Role::truncate();

        /* Role de Administrador */
        $adminRole = Role::create(['name' => 'ADMIN']);

        /* Roles de Gestiones o Departamentos */
        $dirGestion = Role::create(['name' => 'DIR_GESTION']);
        //$assisGestion = Role::create(['name' => 'ASSIS_GESTION']);

        /* Roles del departamento de Planificación */
        $dirPlanificacion = Role::create(['name' => 'DIR_PLANIFICACION']);
        //$coordPlanificacion = Role::create(['name' => 'COORD_PLANIFICACION']);
        //$assisPlanificacion = Role::create(['name' => 'ASSIS_PLANIFICACION']);

        /* Roles del departamento de Compras públicas */
        $dirCP = Role::create(['name' => 'DIR_CP']);
        //$assisCP = Role::create(['name' => 'ASSIS_CP']);

        /* Roles del departamento Financiero */
        $dirFinanciero = Role::create(['name' => 'DIR_FINANCIERO']);
        //$assisFinanciero = Role::create(['name' => 'ASSIS_FINANCIERO']);

        /* Role para la Maxima Autoridad */
        $maximaAutoridad = Role::create(['name' => 'MAXIMA_AUTORIDAD']);

        /* Creando usuario Administrador */
        $admin = New User;
        $admin->apellidos = 'Recalde Solano';
        $admin->nombres = 'Cristhian Andrés';
        $admin->dni = '0802704171';
        $admin->email = 'crecalde@gadpe.gob.ec';
        $admin->password = Hash::make('azw123456');
        $admin->activo = 1;
        $admin->institucion_id = 1;
        $admin->departamento_id = 1;
        $admin->save();
        $admin->assignRole($adminRole);

        /* ======================================== O ============================== */

        /* Creando usuarios de Dirección/Gestiones */
        $directorG = new User;
        $directorG->apellidos = 'Francis Quinde';
        $directorG->nombres = 'Franklin Javier';
        $directorG->dni = '0801010101';
        $directorG->email = 'ffrancis@gadpe.gob.ec';
        $directorG->password = Hash::make('a123456');
        $directorG->activo = 1;
        $directorG->institucion_id = 1;
        $directorG->departamento_id = 1;
        $directorG->save();
        $directorG->assignRole($dirGestion);

        $asistenteG = New User;
        $asistenteG->apellidos = 'Estupiñan Hurtado';
        $asistenteG->nombres = 'Venus Jasmina';
        $asistenteG->dni = '0802020202';
        $asistenteG->email = 'vestupinan@gadpe.gob.ec';
        $asistenteG->password = Hash::make('a123456');
        $asistenteG->activo = 1;
        $asistenteG->institucion_id = 1;
        $asistenteG->departamento_id = 1;
        $asistenteG->save();
        $asistenteG->assignRole($dirGestion);

        /* ================================= O ============================== */

        /* Creando usuarios de Planificación */
        $directorP = New User;
        $directorP->apellidos = 'Muñoz Gongora';
        $directorP->nombres = 'Villaul Antonio';
        $directorP->dni = '0800503930';
        $directorP->email = 'vmunoz@gadpe.gob.ec';
        $directorP->password = Hash::make('a123456');
        $directorP->activo = 1;
        $directorP->institucion_id = 1;
        $directorP->departamento_id = 1;
        $directorP->save();
        $directorP->assignRole($dirPlanificacion);

        $coordP = New User;
        $coordP->apellidos = 'Cruz Delgado';
        $coordP->nombres = 'Judith Alexandra';
        $coordP->dni = '0713796488';
        $coordP->email = 'jcruz@gadpe.gob.ec';
        $coordP->password = Hash::make('a123456');
        $coordP->activo = 1;
        $coordP->institucion_id = 1;
        $coordP->departamento_id = 1;
        $coordP->save();
        $coordP->assignRole($dirPlanificacion);

        $coordP = New User;
        $coordP->apellidos = 'Montaño Casanova';
        $coordP->nombres = 'Paúl Dick';
        $coordP->dni = '0801525593';
        $coordP->email = 'pmontano@gadpe.gob.ec';
        $coordP->password = Hash::make('a123456');
        $coordP->activo = 1;
        $coordP->institucion_id = 1;
        $coordP->departamento_id = 1;
        $coordP->save();
        $coordP->assignRole($dirPlanificacion);

        $asistenteG = New User;
        $asistenteG->apellidos = 'Quintero Arcos';
        $asistenteG->nombres = 'Miriam De Lourdes';
        $asistenteG->dni = '0801149782';
        $asistenteG->email = 'mquintero@gadpe.gob.ec';
        $asistenteG->password = Hash::make('a123456');
        $asistenteG->activo = 1;
        $asistenteG->institucion_id = 1;
        $asistenteG->departamento_id = 1;
        $asistenteG->save();
        $asistenteG->assignRole($dirPlanificacion);


        /* ====================================== O ==================================== */

        /* Creando Usuarios de Compras Públicas */
        $directorCP = New User;
        $directorCP->apellidos = 'Moran Vivas';
        $directorCP->nombres = 'Maria De Los Angeles';
        $directorCP->dni = '0801578113';
        $directorCP->email = 'mmoran@gadpe.gob.ec';
        $directorCP->password = Hash::make('a123456');
        $directorCP->activo = 1;
        $directorCP->institucion_id = 1;
        $directorCP->departamento_id = 1;
        $directorCP->save();
        $directorCP->assignRole($dirCP);

        $asistenteCP = New User;
        $asistenteCP->apellidos = 'Cevallos Rendón';
        $asistenteCP->nombres = 'Wiston Renato';
        $asistenteCP->dni = '0803226893';
        $asistenteCP->email = 'wcevallos@gadpe.gob.ec';
        $asistenteCP->password = Hash::make('a123456');
        $asistenteCP->activo = 1;
        $asistenteCP->institucion_id = 1;
        $asistenteCP->departamento_id = 1;
        $asistenteCP->save();
        $asistenteCP->assignRole($dirCP);

        /* ======================================= O =================================== */

        /* Creando usuarios de Financiero */
        $directorFinan = New User;
        $directorFinan->apellidos = 'Miketta Lopez';
        $directorFinan->nombres = 'Emilia Gabriela';
        $directorFinan->dni = '0802222854';
        $directorFinan->email = 'emiketta@gadpe.gob.ec';
        $directorFinan->password = Hash::make('a123456');
        $directorFinan->activo = 1;
        $directorFinan->institucion_id = 1;
        $directorFinan->departamento_id = 1;
        $directorFinan->save();
        $directorFinan->assignRole($dirFinanciero);

        $asistenteFinan = New User;
        $asistenteFinan->apellidos = 'Valencia Sosa';
        $asistenteFinan->nombres = 'Martha Carolina';
        $asistenteFinan->dni = '0803143668';
        $asistenteFinan->email = 'mavalencia@gadpe.gob.ec';
        $asistenteFinan->password = Hash::make('a123456');
        $asistenteFinan->activo = 1;
        $asistenteFinan->institucion_id = 1;
        $asistenteFinan->departamento_id = 1;
        $asistenteFinan->save();
        $asistenteFinan->assignRole($dirFinanciero);


        /* ====================================== O ================================= */
        $ma = New User;
        $ma->apellidos = 'Zambrano Ortíz';
        $ma->nombres = 'María Roberta';
        $ma->dni = '0800000000';
        $ma->email = 'rzambrano@gadpe.gob.ec';
        $ma->password = Hash::make('a123456');
        $ma->activo = 1;
        $ma->institucion_id = 1;
        $ma->departamento_id = 1;
        $ma->save();
        $ma->assignRole($maximaAutoridad);

    }
}
