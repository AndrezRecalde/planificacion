<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class DepartamentoRequest extends FormRequest
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
            'nombre_departamento'   => 'required',
            'siglas'                =>  'required',
            'extension'             =>  'required',
            //'activo'                =>  'required',
            'institucion_id'        =>  'required',
            'acronimo_id'           =>  'required'
        ];
    }

    public function messages(): array
    {
        return [
            'nombre_departamento.required'  =>  'El nombre del departamento es obligatorio',
            'siglas.required'               =>  'El alias del departamento es obligatorio',
            'extension.required'            =>    'La extension telefónica es obligatoria',
            //'activo.required'               =>      'Especificar el status del departamento',
            'institucion_id.required'       =>      'Seleccione una institución',
            'acronimo_id.required'          =>      'Seleccione el tipo de departamento'
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['errores' => $validator->errors()], 422));
    }
}
