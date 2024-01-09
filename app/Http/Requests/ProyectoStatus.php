<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class ProyectoStatus extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     * Determina si el proyecto lo colocan en pausa o archivado
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
            'archivo'  =>  'required'
        ];
    }

    public function messages(): array
    {
       return [
        'archivo.required'     =>  'El status es obligatoria',
       ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['errores' => $validator->errors()], 422));
    }
}
