<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class ProgramaRequest extends FormRequest
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
            'nombre_programa' => 'required',
            'planificaciontipo_id' => 'required',
            'objetivo_id' => 'required'
        ];
    }

    public function messages(): array
    {
        return [
            'nombre_programa.required' =>  'El nombre del programa es obligatorio',
            'planificaciontipo_id.required' =>  'Elija el tipo de planificación',
            'objetivo_id.required' =>  'Elija el objetivo',

        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['errores' => $validator->errors()], 422));
    }
}
