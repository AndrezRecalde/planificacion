import { useEffect } from "react";
import { Modal } from "@mantine/core";
import { TextSection } from "../../../../../components";
import {
    useCategoriapdotStore,
    useCompetenciapdotStore,
    useComponentepdotStore,
    useLestrategiapdotStore,
    useUiCompetenciapdot,
} from "../../../../../hooks";
import { isNotEmpty, useForm } from "@mantine/form";
import { CompetenciapdotForm } from "../../../../../components";

export const CompetenciapdotModal = () => {
    const { activateCompetenciapdot, setActivateCompetenciapdot } =
        useCompetenciapdotStore();
    const { isOpenModalCompetenciapdot, modalActionCompetenciapdot } =
        useUiCompetenciapdot();

    const { startLoadComponentespdot, startClearComponentepdot } =
        useComponentepdotStore();
    const { startLoadCategoriaspdot, startClearCategoriapdot } =
        useCategoriapdotStore();
    const { startLoadLestrategiapdots } = useLestrategiapdotStore();

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            nombre_competencia: "",
            lestrategiapdot_id: null,
            componentes: [],
            cotpdots: [],
        },
        validate: {
            nombre_competencia: isNotEmpty(
                "Por favor ingrese el nombre de la competencia"
            ),
            lestrategiapdot_id: isNotEmpty(
                "Por favor seleccione una linea estrategica"
            ),
            componentes: isNotEmpty(
                "Por favor seleccione al menos un componente pdot"
            ),
            cotpdots: isNotEmpty(
                "Por favor seleccione al menos una categoria pdot"
            ),
        },
        transformValues: (values) => ({
            ...values,
            lestrategiapdot_id: Number(values.lestrategiapdot_id) || null,
            componentes: values.componentes.map(
                (componente) => Number(componente) || null
            ),
            cotpdots: values.cotpdots.map((cot) => Number(cot) || null),
        }),
    });

    useEffect(() => {
        startLoadComponentespdot({ activo: true });
        startLoadCategoriaspdot({ activo: true });
        startLoadLestrategiapdots({ lineapdot_id: null, activo: true });

        return () => {
            startClearComponentepdot();
            startClearCategoriapdot();
        };
    }, []);

    const handleCloseModal = () => {
        modalActionCompetenciapdot(false);
        if (activateCompetenciapdot !== null) {
            setActivateCompetenciapdot(null);
        }
        form.reset();
    };

    return (
        <Modal
            opened={isOpenModalCompetenciapdot}
            onClose={handleCloseModal}
            size="xl"
            title={
                <TextSection fz={18} fw={700} tt="capitalize">
                    Ficha Categoria del PDOT
                </TextSection>
            }
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
        >
            <CompetenciapdotForm form={form} />
        </Modal>
    );
};
