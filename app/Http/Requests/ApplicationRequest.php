<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class ApplicationRequest extends FormRequest
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
            'nombre_app'        =>  'required',
            'admin_email'       =>  'required',
            'copyright'         =>  'required',
            'logo_url'          =>  'mimes:jpg,bmp,png',
            'color'             =>  'required'
        ];
    }

    public function messages(): array
    {
        return [
            'nombre_app.required'   =>  'El nombre es obligatorio',
            'admin_email.required'  =>  'El email es obligatorio',
            'copyright.required'    =>  'El copyright es obligatorio',
            'logo_url.mimes'        =>  'La imagen debe contener el formato: jpg, jpeg, png',
            'color.required'        =>  'Por favor seleccione un color'
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['errores' => $validator->errors()], 422));
    }
}
