<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rule;

class InstitucionRequest extends FormRequest
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
            'nombre_institucion'    =>  'required',
            'siglas'            =>  'required',
            'ruc'                   =>  ['required', Rule::unique('instituciones')->ignore($this->request->get('id'))],
            //'activo'    =>  'required',
            'telefono'  =>  'required',
            'gad_id'    =>  'required'
        ];
    }

    public function messages(): array
    {
        return [
            'nombre_institucion.required' =>  'El nombre de institución es obligatorio',
            'siglas.required'       =>  'Por favor introduzca las siglas',
            'ruc.required'      =>  'El RUC es obligatorio',
            'ruc.unique'        =>  'La institución ya está registrada',
            //'activo.required'   =>  'El status de la institución es obligatorio',
            'telefono.required' =>  'El teléfono es obligatorio',
            'gad_id.required'   =>  'El tipo de gad es obligatorio',

        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['errores' => $validator->errors()], 422));
    }
}
