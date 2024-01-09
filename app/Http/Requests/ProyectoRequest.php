<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class ProyectoRequest extends FormRequest
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
            'nombre_proyecto'  =>  'required',
            'programa_id'  =>  'required',
            'planificaciontipo_id'  =>  'required',
            'nivel_id'  =>  'required',
            'ponderacion'  =>  'required',
            'linea_base'  =>  'required',
            'meta_detalle'  =>  'required',
            'indicador_detalle'  =>  'required',
            'tiempo_meses'  =>  'required',
            'fecha_inicio'  =>  'required',
            'fecha_finalizacion'  =>  'required',
            'departamento_id'  =>  'required',
            'tipoproyecto_id'  =>  'required',
            'partidapresupuestaria_id'  =>  'required',
            'opndesarrollos'  =>  'required'
        ];
    }

    public function messages(): array
    {
        return [
            'nombre_proyecto.required' => 'El nombre del proyecto es obligatorio' ,
            'programa_id.required' => 'Seleccione a que programa pertenece' ,
            'planificaciontipo_id.required' => 'Seleccione un tipo de planificación' ,
            'nivel_id.required' => 'Seleccione el nivel del proyecto' ,
            'ponderacion.required' => 'La ponderación es obligatoria' ,
            'linea_base.required' => 'La línea base es obligatorio' ,
            'meta_detalle.required' => 'El detalle de la meta es obligatorio' ,
            'indicador_detalle.required' => 'El indicador es obligatorio' ,
            'tiempo_meses.required' => 'El tiempo en meses es obligatorio' ,
            'fecha_inicio.required' => 'La fecha de inicio es obligatorio' ,
            'fecha_finalizacion.required' => 'La fecha de finalización es obligatorio' ,
            'departamento_id.required' => 'El departamento es obligatorio' ,
            'tipoproyecto_id.required' => 'El tipo proyecto es obligatorio' ,
            'partidapresupuestaria_id.required' => 'La partida presupuestatia es obligatorio' ,
            'opndesarrollos.required' => 'Los Objetivos son obligatorios' ,


        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['errores' => $validator->errors()], 422));
    }
}
