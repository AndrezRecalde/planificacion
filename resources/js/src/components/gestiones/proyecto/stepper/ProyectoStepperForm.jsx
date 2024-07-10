import { useState } from "react";
import { Code, Divider, Group, Stepper } from "@mantine/core";
import { hasLength, isNotEmpty, useForm } from "@mantine/form";
import {
    BtnSection,
    ProyectoInfoForm,
    ProyectoMetasForm,
    ProyectoObjetivosForm,
    ProyectoTiemposForm,
} from "../../../../components";
import { IconChevronsLeft, IconChevronsRight } from "@tabler/icons-react";

export const ProyectoStepperForm = () => {
    const [active, setActive] = useState(0);

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            programa_id: "",
            tipoproyecto_id: "",
            nombre_proyecto: "",
            ponderacion: "",

            fecha_inicio: "",
            fecha_finalizacion: "",
            nivel_id: "",
            tiempo_meses: "",

            tipounidad_id: "",
            indicador_detalle: "",
            linea_base: "",
            meta_detalle: "",

            opndesarrollos: "",
            odssostenibles: "",
        },

        validate: {
            programa_id: isNotEmpty("Por favor seleccione un programa"),
            tipoproyecto_id: isNotEmpty(
                "Por favor seleccione el tipo de proyecto"
            ),
            nombre_proyecto: hasLength(
                { min: 10, max: 700 },
                "El nombre del proyecto debe contener entre 10 a 700 caracteres"
            ),
            ponderacion: isNotEmpty(
                "Por favor coloque la ponderación al proyecto"
            ),
            fecha_inicio: isNotEmpty(
                "Por favor seleccione una fecha de inicialización"
            ),
            fecha_finalizacion: isNotEmpty(
                "Por favor seleccione la fecha de finalización"
            ),
            nivel_id: isNotEmpty(
                "Por favor seleccione la prioridad del proyecto"
            ),
            tiempo_meses: isNotEmpty("Por favor ingrese el número de meses"),
            tipounidad_id: isNotEmpty("Por favor seleccione el tipo de unidad"),
            indicador_detalle: isNotEmpty(
                "Por favor ingrese el detalle del indicador"
            ),
            linea_base: isNotEmpty("Por favor ingrese la línea base"),
            meta_detalle: isNotEmpty("Por favor ingrese el detalle de la meta"),
        },
    });

    const nextStep = () => {
        if (
            active === 0 &&
            (form.validateField("programa_id").hasError ||
                form.validateField("tipoproyecto_id").hasError ||
                form.validateField("nombre_proyecto").hasError ||
                form.validateField("ponderacion").hasError)
        )
            return;
        if (
            active === 1 &&
            (form.validateField("fecha_inicio").hasError ||
                form.validateField("fecha_finalizacion").hasError ||
                form.validateField("nivel_id").hasError ||
                form.validateField("tiempo_meses").hasError)
        )
            return;

        if (
            active === 2 &&
            (form.validateField("tipounidad_id").hasError ||
                form.validateField("indicador_detalle").hasError ||
                form.validateField("linea_base").hasError ||
                form.validateField("meta_detalle").hasError)
        )
            return;

        setActive((current) => (current < 4 ? current + 1 : current));
    };

    const prevStep = () =>
        setActive((current) => (current > 0 ? current - 1 : current));

    return (
        <>
            <Divider />
            <Stepper active={active} size="xs" mt={15}>
                <Stepper.Step label="Detalle" description="Información">
                    <ProyectoInfoForm form={form} />
                </Stepper.Step>

                <Stepper.Step
                    label="Tiempo y Prioridad"
                    description="Tiempos y prioridades"
                >
                    <ProyectoTiemposForm form={form} />
                </Stepper.Step>

                <Stepper.Step
                    label="Detalles bases"
                    description="Metas e indicadores"
                >
                    <ProyectoMetasForm form={form} />
                </Stepper.Step>
                <Stepper.Step
                    label="Definir objetivos"
                    description="Definir objetivos"
                >
                    <ProyectoObjetivosForm form={form} />
                </Stepper.Step>
                <Stepper.Completed>
                    Completed! Form values:
                    <Code block mt="xl">
                        {JSON.stringify(form.getValues(), null, 2)}
                    </Code>
                </Stepper.Completed>
            </Stepper>

            <Group justify="flex-end" mt="xl">
                {active !== 0 && (
                    <BtnSection
                        variant="subtle"
                        fontSize={12}
                        icon={IconChevronsLeft}
                        handleAction={prevStep}
                    >
                        Back
                    </BtnSection>
                )}
                {active !== 4 && (
                    <BtnSection
                        variant="light"
                        fontSize={12}
                        icon={IconChevronsRight}
                        handleAction={nextStep}
                    >
                        Siguiente
                    </BtnSection>
                )}
            </Group>
        </>
    );
};
