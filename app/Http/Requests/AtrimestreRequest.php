<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class AtrimestreRequest extends FormRequest
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
            'programado' => 'required',
            'avance'     => 'required',
            'actividad_id' => 'required'
        ];
    }

    public function messages(): array
    {
        return [
            'programado.required'      =>  'La cantidad programada es obligatoria',
            'avance.required'          =>  'El avance es obligatorio',
            'actividad_id.required'    =>  'No se ha seleccionado una actividad existente'
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['errores' => $validator->errors()], 422));
    }
}
