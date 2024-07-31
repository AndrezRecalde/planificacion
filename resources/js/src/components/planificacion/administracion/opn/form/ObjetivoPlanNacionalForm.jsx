import { Box, Divider, Select, Stack, TextInput } from "@mantine/core";
import { BtnSubmit } from "../../../../../components";
import { APP_WORDS, BTN_TITLES } from "../../../../../helpers";
import { IconChecks } from "@tabler/icons-react";
import { useEjeStore, useGobiernoStore, useOPNStore, useUiOPN } from "../../../../../hooks";

export const ObjetivoPlanNacionalForm = ({ form }) => {

    const { startAddOPN, activateOPN, setActivateOPN } = useOPNStore();
    const { gobiernos } = useGobiernoStore();
    const { ejes } = useEjeStore();
    const { modalActionOPN } = useUiOPN();

    useEffect(() => {
      if (activateOPN !== null) {
        form.setValues({
            ...activateOPN,
            eje_id: activateOPN.eje_id.toString(),
            gobierno_id: activateOPN.gobierno_id.toString()
        });
        return;
      }
    }, [activateOPN]);


    const handleSubmit = (e) => {
        e.preventDefault();
        startAddOPN(form.getTransformedValues());
        if (activateOPN !== null) {
            setActivateOPN(null);
        }
        form.reset();
        modalActionOPN(false);
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
                <Select
                    required
                    label="Gobierno"
                    placeholder="Seleccione el gobierno"
                    data={gobiernos.map((gobierno) => {
                        return {
                            label: gobierno.nombre_gobierno,
                            value: gobierno.id.toString(),
                        };
                    })}
                    nothingFoundMessage={APP_WORDS.NOTHING_FOUND}
                    clearable
                    {...form.getInputProps("gobierno_id")}
                />
                <TextInput
                    radius="sm"
                    label={APP_WORDS.LINEAESTRATEGICA_TEXT_NOMBRELINEA}
                    withAsterisk
                    placeholder={
                        APP_WORDS.LINEAESTRATEGICA_PLACEHOLDER_NOMBRELINEA
                    }
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
                    {...form.getInputProps("lineapdot_id")}
                />
                <BtnSubmit IconSection={IconChecks}>
                    {BTN_TITLES.BTN_SAVE}
                </BtnSubmit>
            </Stack>
        </Box>
    );
};
