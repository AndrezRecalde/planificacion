<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rule;

class ProveedorRequest extends FormRequest
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
            'nombre_proveedor'  => 'required',
            'ruc'               =>  'required'/* ['required', Rule::unique('proveedores')->ignore($this->request->get('id'))] */,
            'telefono'          => '',
        ];
    }

    public function messages(): array
    {
        return [
            'nombre_proveedor.required'     =>  'El nombre de la entidad es obligatoria',
            'ruc.required'      =>  'El ruc de la entidad es obligatoria',
            'ruc.unique'        =>  'El proveedor ya ha sido registrado',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['errores' => $validator->errors()], 422));
    }
}
