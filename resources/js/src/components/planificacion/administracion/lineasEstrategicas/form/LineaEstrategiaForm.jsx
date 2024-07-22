import { useEffect } from "react";
import { Box, Divider, Select, Stack, TextInput } from "@mantine/core";
import { BtnSubmit } from "../../../../../components";
import { IconChecks } from "@tabler/icons-react";
import {
    useLestrategiapdotStore,
    useLineapdotStore,
    useUiLestrategiapdot,
} from "../../../../../hooks";
import { APP_WORDS, BTN_TITLES } from "../../../../../helpers";

export const LineaEstrategiaForm = ({ form }) => {
    const {
        startAddLestrategiapdot,
        activateLestrategia,
        setActivateLestrategia,
    } = useLestrategiapdotStore();
    const { lineaspdot } = useLineapdotStore();
    const { modalActionLestrategiapdot } = useUiLestrategiapdot();

    useEffect(() => {
        if (activateLestrategia !== null) {
            form.setValues({
                ...activateLestrategia,
                lineapdot_id: activateLestrategia.lineapdot_id.toString(),
            });
            return;
        }
    }, [activateLestrategia]);

    const handleSubmit = (e) => {
        e.preventDefault();
        startAddLestrategiapdot(form.getTransformedValues());
        if (activateLestrategia !== null) {
            setActivateLestrategia(null);
        }
        modalActionLestrategiapdot(false);
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
                    label={APP_WORDS.LINEAESTRATEGICA_TEXT_NOMBRELINEA}
                    withAsterisk
                    placeholder={
                        APP_WORDS.LINEAESTRATEGICA_PLACEHOLDER_NOMBRELINEA
                    }
                    key={form.key("linea_estrategica")}
                    {...form.getInputProps("linea_estrategica")}
                />
                <Select
                    required
                    label={APP_WORDS.LINEAESTRATEGICA_SELECT_LINEAPDOT}
                    placeholder={APP_WORDS.SELECT_PLACEHOLDER}
                    data={lineaspdot.map((linea) => {
                        return {
                            label: linea.nombre_linea,
                            value: linea.id.toString(),
                        };
                    })}
                    nothingFoundMessage={APP_WORDS.NOTHING_FOUND}
                    clearable
                    key={form.key("lineapdot_id")}
                    {...form.getInputProps("lineapdot_id")}
                />
                <BtnSubmit IconSection={IconChecks}>
                    {BTN_TITLES.BTN_SAVE}
                </BtnSubmit>
            </Stack>
        </Box>
    );
};
