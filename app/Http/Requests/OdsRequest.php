<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rule;


class OdsRequest extends FormRequest
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
            'nombre_ods'            =>  'required',
            'imagen_url'            =>  ['required', Rule::unique('odssostenibles')->ignore($this->request->get('id'))],
        ];
    }

    public function messages(): array
    {
        return [
            'nombre_ods.required'  =>   'El objetivo ODS es obligatorio',
            'imagen_url.mimes'       =>   'La imagen debe contener formato: jpg, jpeg, png',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['errores' => $validator->errors()], 422));
    }
}
