<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class TableroRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nombre_tablero'    =>  'required',
            'descripcion'       =>  '',
            'administrativo_id'  => 'required',
            'departamento_id'   =>  'required'
        ];
    }

    function message() : array {
        return [
            'nombre_tablero.required'    =>  'El nombre del tablero es obligatorio',
            'administrativo_id.required' =>  'Seleccione un periodo administrativo al tablero',
            'departamento_id.required'   =>  'Seleccione el departamento que desee vincular este tablero',

        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['errores' => $validator->errors()], 422));
    }
}
