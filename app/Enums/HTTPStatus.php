<?php

namespace App\Enums;

enum HTTPStatus:string {
    case Created = 'Creado con éxito';
    case Updated = 'Actualizado con éxito';
    case Deleted = 'Eliminado con éxito';
    case NotFound = '404 - No Encontrado';

    case Success = 'success';
    case Error = 'error';

}
