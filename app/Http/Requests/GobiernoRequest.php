<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class GobiernoRequest extends FormRequest
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
            'nombre_gobierno'   =>  'required',
            'presidente'        =>  'required',
            'vicepresidente'    =>  'required',
            'fecha_inicio'      =>  'required',
            'fecha_fin'         =>  'required'
        ];
    }

    public function messages(): array
    {
        return [
            'nombre_gobierno.required'  =>  'El nombre de gobierno es obligatorio',
            'presidente.required'       =>  'El presidente es obligatorio',
            'vicepresidente.required'   =>  'El vicepresidente es obligatorio',
            'fecha_inicio.required'     =>  'La fecha de inicio es obligatoria',
            'fecha_fin.required'        =>  'La fecha de fin es obligatoria'
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['errores' => $validator->errors()], 422));
    }
}
