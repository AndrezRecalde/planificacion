<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class InstrumentoRequest extends FormRequest
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
            'nombre_archivo'    =>  'required',
            'archivo'           =>  'mimes:pdf',
            'fecha_inicio'      =>  'required',
            'fecha_fin'         =>  'required'
        ];
    }

    public function messages(): array
    {
        return [
            'nombre_archivo.required'   =>  'El nombre del archivo es obligatorio',
            'archivo.required'          =>  'El archivo es obligatorio',
            'fecha_inicio.required'     =>  'La fecha de inicio es obligatorio',
            'fecha_fin.required'        =>  'La fecha de fin es obligatorio',

        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['errores' => $validator->errors()], 422));
    }
}
