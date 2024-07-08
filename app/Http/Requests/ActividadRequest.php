<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class ActividadRequest extends FormRequest
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
            'nombre_actividad'  =>  'required',
            'descripcion'       =>  '',
            'estado_id'         =>  'required',
            'color'             =>  '',
            'portada'           =>  '',
            'ponderacion'       =>  'required',
            'tipoactividad_id'  =>  'required',
            'proyecto_id'       =>  'required',
            'partidapresupuestaria_id'       =>  '',
            'tablero_id'        =>  'required',
            'proveedor_id'      =>  '',

        ];
    }

    public function messages(): array
    {
        return [
            'nombre_actividad.required'   =>  'El nombre de la actividad es obligatorio',
            'estado_id.required'          =>  'Seleccione el estado de la actividad',
            'ponderacion.required'        =>  'La ponderación es obligatoria',
            'tipoactividad_id.required'   =>  'El tipo de la actividad es obligatorio',
            'proyecto_id.required'        =>  'No se ha seleccionado el proyecto',
            'tablero_id.required'         =>  'No se ha identificado un tablero',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['errores' => $validator->errors()], 422));
    }
}
