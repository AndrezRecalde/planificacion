import { Box, Divider, Stack, TextInput } from "@mantine/core";
import { BtnSubmit } from "../../../../../components";
import { BTN_TITLES } from "../../../../../helpers";
import { IconChecks } from "@tabler/icons-react";
import { useCategoriapdotStore, useUiCategoriapdot } from "../../../../../hooks";
import { useEffect } from "react";

export const CategoriapdotForm = ({ form }) => {
    const {
        startAddCategoriapdot,
        activateCategoriapdot,
        setActivateCategoriapdot,
    } = useCategoriapdotStore();
    const { modalActionCategoriapdot } = useUiCategoriapdot();

    useEffect(() => {
      if(activateCategoriapdot !== null) {
        form.setValues({ ...activateCategoriapdot });
        return;
      }

    }, [activateCategoriapdot]);

    const handleSubmit = (e) => {
        e.preventDefault();
        startAddCategoriapdot(form.getValues());
        if (activateCategoriapdot !== null) {
            setActivateCategoriapdot(null);
        }
        modalActionCategoriapdot(false);
        form.reset();
    }


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
                    label="Nombre de la categoria pdot"
                    withAsterisk
                    placeholder="Digite el nombre de la categoria pdot"
                    key={form.key("nombre_categoria")}
                    {...form.getInputProps("nombre_categoria")}
                />
                <BtnSubmit IconSection={IconChecks}>
                    {BTN_TITLES.BTN_SAVE}
                </BtnSubmit>
            </Stack>
        </Box>
    );
};
