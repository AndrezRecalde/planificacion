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
    const { startLoadLestrategiapdots, startClearLestrategiapdot } =
        useLestrategiapdotStore();

    const form = useForm({
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
        if (isOpenModalCompetenciapdot) {
            startLoadLestrategiapdots({ activo: true });
            startLoadComponentespdot({ activo: true });
            startLoadCategoriaspdot({ activo: true });
            return;
        }

        return () => {
            //startClearComponentepdot();
            //startClearCategoriapdot();
            //startClearLestrategiapdot();
        };
    }, [isOpenModalCompetenciapdot]);

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
                    Ficha Competencias del PDOT
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
