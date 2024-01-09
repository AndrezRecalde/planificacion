<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;


class AddDirectoresRequest extends FormRequest
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
            'director'  =>  'required',
            'periodo'   =>  'required',
            'referencia_documento' =>   'required'
        ];
    }

    public function messages(): array
    {
        return [
            'director.required'      =>  'Seleccione un director',
            'periodo.required'       =>  'Seleccione el periodo',
            'referencia_documento.required' =>  'Ingrese Número de MEMO de asignación'
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['errores' => $validator->errors()], 422));
    }
}
