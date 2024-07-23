import {
    Box,
    Divider,
    MultiSelect,
    Select,
    Stack,
    TextInput,
} from "@mantine/core";
import { BtnSubmit } from "../../../../../components";
import { APP_WORDS, BTN_TITLES } from "../../../../../helpers";
import {
    useCategoriapdotStore,
    useCompetenciapdotStore,
    useComponentepdotStore,
    useLestrategiapdotStore,
    useUiCompetenciapdot,
} from "../../../../../hooks";
import { IconChecks } from "@tabler/icons-react";
import { useEffect } from "react";

export const CompetenciapdotForm = ({ form }) => {
    const { lestrategiapdot_id } = form.values;
    const {
        startAddCompetenciapdot,
        setActivateCompetenciapdot,
        activateCompetenciapdot,
    } = useCompetenciapdotStore();
    const { modalActionCompetenciapdot } = useUiCompetenciapdot();
    const { lestrategias, startLoadLestrategiapdots } =
        useLestrategiapdotStore();
    const { componentespdot } = useComponentepdotStore();
    const { categoriaspdot } = useCategoriapdotStore();

    useEffect(() => {
        if (activateCompetenciapdot !== null) {
            form.setValues({
                ...activateCompetenciapdot,
                componentes: activateCompetenciapdot.componentes.map(
                    (componente) => componente.id.toString()
                ),
                cotpdots: activateCompetenciapdot.cotpdots.map((categoria) =>
                    categoria.id.toString()
                ),
            });
            form.setFieldValue(
                "lestrategiapdot_id",
                activateCompetenciapdot.lestrategiapdot_id.toString()
            );
            return;
        }
    }, [activateCompetenciapdot]);

    /* PARA CARGAR LAS LINEAS ESTRATEGICAS DESATIVADAS */
    useEffect(() => {
        if (activateCompetenciapdot !== null) {
            let valor = lestrategias.some(
                (estrategia) =>
                    estrategia.id === activateCompetenciapdot.lestrategiapdot_id
            );
            if (!valor) {
                startLoadLestrategiapdots({});
            } else {
                startLoadLestrategiapdots({ activo: true });
            }
        }
    }, [activateCompetenciapdot]);



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form.getTransformedValues());
        startAddCompetenciapdot(form.getTransformedValues());
        if (activateCompetenciapdot !== null) {
            setActivateCompetenciapdot(null);
        }
        modalActionCompetenciapdot(false);
        form.reset();
    };

    return (
        <Box
            component="form"
            mx="auto"
            style={(theme) => ({
                padding: theme.spacing.xs,
            })}
            onSubmit={form.onSubmit((_, e) => handleSubmit(e))}
        >
            <Stack
                bg="var(--mantine-color-body)"
                align="stretch"
                justify="center"
                gap="lg"
            >
                <Divider />
                <TextInput
                    radius="sm"
                    label="Nombre de la Competencia PDOT"
                    withAsterisk
                    placeholder="Ingrese nombre de la competencia del pdot"
                    //key={form.key("nombre_competencia")}
                    {...form.getInputProps("nombre_competencia")}
                />
                <Select
                    required
                    clearable
                    label="Linea Estrategica del PDOT"
                    placeholder="Seleccione una linea estrategica del pdot"
                    data={lestrategias?.map((linea) => {
                        return {
                            label: linea?.linea_estrategica,
                            value: linea?.id.toString(),
                        };
                    })}
                    //key={form.key('lestrategiapdot_id')}
                    {...form.getInputProps("lestrategiapdot_id")}
                />
                <MultiSelect
                    label="Componentes del PDOT"
                    placeholder="Seleccione los componentes del pdot"
                    data={componentespdot.map((componente) => {
                        return {
                            label: componente.nombre_componente,
                            value: componente.id.toString(),
                        };
                    })}
                    //key={form.key("componentes")}
                    {...form.getInputProps("componentes")}
                    hidePickedOptions
                    withAsterisk
                />
                <MultiSelect
                    label="Categorias del PDOT"
                    placeholder="Seleccione las categorias del PDOT"
                    data={categoriaspdot.map((categoria) => {
                        return {
                            label: categoria.nombre_categoria,
                            value: categoria.id.toString(),
                        };
                    })}
                    //key={form.key("cotpdots")}
                    {...form.getInputProps("cotpdots")}
                    hidePickedOptions
                    withAsterisk
                />
                <BtnSubmit IconSection={IconChecks}>
                    {BTN_TITLES.BTN_SAVE}
                </BtnSubmit>
            </Stack>
        </Box>
    );
};
