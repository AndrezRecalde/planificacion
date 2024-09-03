import { useEffect } from "react";
import {
    Box,
    Divider,
    MultiSelect,
    Select,
    Stack,
    TextInput,
} from "@mantine/core";
import { BtnSubmit } from "../../../../components";
import { BTN_TITLES } from "../../../../helpers";
import { IconChecks } from "@tabler/icons-react";
import {
    useDepartamentoStore,
    usePlanificacionTipoStore,
    useProgramaStore,
    useUiPrograma,
} from "../../../../hooks";
import classes from "../../../../assets/styles/permission/AddPermission.module.css";

export const ProgramaForm = ({ form }) => {
    const { activatePrograma, setActivatePrograma, startAddPrograma } =
        useProgramaStore();
    const { isOpenModalPrograma, modalActionPrograma } = useUiPrograma();
    const { departamentos } = useDepartamentoStore();
    const { planificacionTipos } = usePlanificacionTipoStore();

    useEffect(() => {
        if (isOpenModalPrograma && activatePrograma !== null) {
            form.setValues({
                ...activatePrograma,
                planificaciontipo_id:
                    activatePrograma.planificaciontipo_id.toString(),
                objetivo_id: activatePrograma.objetivo_id.toString(),
                departamentos: activatePrograma.departamentos.map(
                    (departamento) => departamento.id.toString()
                ),
            });
            return;
        }
    }, [activatePrograma, isOpenModalPrograma]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form.getTransformedValues());
        startAddPrograma(form.getTransformedValues());
        if (activatePrograma !== null) {
            setActivatePrograma(null);
        }
        modalActionPrograma(false);
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
                    label="Nombre del programa"
                    withAsterisk
                    placeholder="Digite el nombre del programa"
                    key={form.key("nombre_programa")}
                    {...form.getInputProps("nombre_programa")}
                />
                <Select
                    withAsterisk
                    clearable
                    label="Tipo planificación"
                    placeholder="Seleccione el tipo de planificación"
                    data={planificacionTipos.map((tipos) => {
                        return {
                            label: tipos.nombre_planificacion,
                            value: tipos.id.toString(),
                        };
                    })}
                    key={form.key("planificaciontipo_id")}
                    {...form.getInputProps("planificaciontipo_id")}
                    nothingFoundMessage="Nada encontrado..."
                />
                <Select
                    withAsterisk
                    clearable
                    label="Objetivo Estratégico"
                    placeholder="Seleccione el objetivo estratégico"
                    data={["React", "Angular", "Vue", "Svelte"]}
                    key={form.key("objetivo_id")}
                    {...form.getInputProps("objetivo_id")}
                    nothingFoundMessage="Nada encontrado..."
                />
                <MultiSelect
                    withAsterisk
                    label="Departamentos"
                    placeholder="Seleccione el/los departamentos que el programa redirecciona"
                    data={departamentos.map((departamento) => {
                        return {
                            label: departamento.nombre_departamento,
                            value: departamento.id.toString(),
                        };
                    })}
                    searchable
                    classNames={{ pill: classes.pill }}
                    key={form.key("departamentos")}
                    {...form.getInputProps("departamentos")}
                    nothingFoundMessage="Nada encontrado..."
                />
                <BtnSubmit IconSection={IconChecks}>
                    {BTN_TITLES.BTN_SAVE}
                </BtnSubmit>
            </Stack>
        </Box>
    );
};
