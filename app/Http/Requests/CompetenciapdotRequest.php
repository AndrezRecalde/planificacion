<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class CompetenciapdotRequest extends FormRequest
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
            'nombre_competencia'    =>  'required',
            'lestrategiapdot_id'    =>  'required',
            'componentes'           =>  'required'
        ];
    }

    public function messages(): array
    {
        return [
            'nombre_competencia.required'  =>  'El nombre de competencia es obligatorio',
            'lestrategiapdot_id.required'  =>  'La Línea estrategica es obligatoria',
            'componentes.required'  =>  'Elija los componentes',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['errores' => $validator->errors()], 422));
    }
}
