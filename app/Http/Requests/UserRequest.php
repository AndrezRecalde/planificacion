<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
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
            'apellidos' =>  'required',
            'nombres' =>  'required',
            'dni' =>  ['required', Rule::unique('users')->ignore($this->request->get('id'))],
            'email' =>  ['required', Rule::unique('users')->ignore($this->request->get('id'))],
            'roles' =>  'required',
            'institucion_id' =>  'required',
            'departamento_id' =>  'required',
            'administrativo_id' =>  'required'
        ];
    }

    public function messages(): array
    {
        return [
            'apellidos.required'    =>  'El apellido(s) del usuario es obligatorio',
            'nombres.required'      =>  'El nombre es obligatorio',
            'dni.required'          =>  'El DNI es obligatorio',
            'dni.unique'            =>  'El usuario ya está registrado',
            'email.required'        =>  'El email es obligatorio',
            'email.unique'          =>  'El email ya está registrado',
            'roles.required'        =>  'Seleccione el role del usuario',
            'institucion_id.required'   =>  'La institucion es obligatoria',
            'departamento_id.required'   =>  'El departamento es obligatoria',
            'administrativo_id.required' =>  'Seleccione el periodo administrativo por favor'
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['errores' => $validator->errors()], 422));
    }
}
