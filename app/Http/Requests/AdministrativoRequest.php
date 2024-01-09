<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class AdministrativoRequest extends FormRequest
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
            'inicio_periodo' => 'required',
            'fin_periodo'   =>  'required',
            'maxima_autoridad' => 'required'
        ];
    }

    public function messages(): array
    {
        return [
            'inicio_periodo.required'      =>  'El Inicio de periodo es obligatorio',
            'fin_periodo.required'         =>  'El Fin de periodo es obligatorio',
            'maxima_autoridad.required'    =>  'La maxima autoridad es obligatoria'
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['errores' => $validator->errors()], 422));
    }
}
