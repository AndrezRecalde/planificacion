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
            'ponderacion'   =>  'required',
            'proyecto_id'   =>  'required',
        ];
    }

    public function messages(): array
    {
        return [
            'nombre_actividad.required'   =>  'El nombre de la actividad es obligatorio',
            'ponderacion.required'   =>  'La ponderación es obligatoria',
            'proyecto_id.required'   =>  'No se ha seleccionado el proyecto',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['errores' => $validator->errors()], 422));
    }
}
