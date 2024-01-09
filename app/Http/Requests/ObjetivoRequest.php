<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class ObjetivoRequest extends FormRequest
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
            'lestrategiapdot_id'    =>  'required',
            'competenciapdot_id'    =>  'required',
            'componentepdot_id' =>  'required',
            'gestionpdot_id'    =>  'required',
            'oepdot_id' =>  'required',
            'earticulacion_id'  =>  'required',
            'metapdot_id'   =>  'required',
            'indicadorpdot' =>  'required',
            'departamentos' =>  'required',    //BelongToMany
            'competencia_id'    =>  'required',
            'rmedicion_id'  =>  'required',
            'oepeis_id' =>  'required',
            'linea_base'    =>  'required',
            'anio_lbase'    =>  'required',
        ];
    }

    public function messages(): array
    {
        return [
            'lestrategiapdot_id.required'    =>  'La línea estrategica es obligatoria',
            'competenciapdot_id.required'    =>  'La competencia es obligatoria',
            'componentepdot_id.required' =>  'El componente es obligatorio',
            'gestionpdot_id.required'    =>  'La gestión PDOT es obligatoria',
            'oepdot_id.required' =>  'El Objetivo Estrategico del PDOT es obligatorio',
            'earticulacion_id.required'  =>  'La articulación es obligatoria',
            'metapdot_id.required'   =>  'La Meta del PDOT es obligatoria',
            'indicadorpdot.required' =>  'required',
            'departamentos.required' =>  'required',    // BelongsToMany
            'competencia_id.required'    =>  'required',
            'rmedicion_id.required'  =>  'required',
            'oepeis_id.required' =>  'required',
            'linea_base.required'    =>  'required',
            'anio_lbase.required'    =>  'required',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['errores' => $validator->errors()], 422));
    }
}
