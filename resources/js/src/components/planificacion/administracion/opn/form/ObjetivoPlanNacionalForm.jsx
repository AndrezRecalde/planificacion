import { useEffect } from "react";
import { Box, Divider, Select, Stack, TextInput } from "@mantine/core";
import { APP_WORDS, BTN_TITLES } from "../../../../../helpers";
import { BtnSubmit } from "../../../../../components";
import {
    useEjeStore,
    useGobiernoStore,
    useOPNStore,
    useUiOPN,
} from "../../../../../hooks";
import { IconChecks } from "@tabler/icons-react";

export const ObjetivoPlanNacionalForm = ({ form }) => {
    const { startAddOPN, activateOPN, setActivateOPN } = useOPNStore();
    const { gobiernos } = useGobiernoStore();
    const { ejes } = useEjeStore();
    const { modalActionOPN } = useUiOPN();

    useEffect(() => {
        if (gobiernos.length > 0) {
            form.setFieldValue(
                "gobierno_id",
                activateOPN.gobierno_id
                    ? activateOPN.gobierno_id.toString()
                    : gobiernos[0]?.id.toString()
            );
            console.log("clic aqui");
            return;
        }
    }, [gobiernos]);

    useEffect(() => {
        if (activateOPN !== null) {
            form.setValues({
                ...activateOPN,
                eje_id: activateOPN.eje_id.toString(),
                gobierno_id: activateOPN.gobierno_id.toString(),
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
                <Select
                    required
                    disabled
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
                <Select
                    required
                    label="Eje"
                    placeholder="Seleccione el eje"
                    data={ejes.map((eje) => {
                        return {
                            label: eje.nombre_eje,
                            value: eje.id.toString(),
                        };
                    })}
                    nothingFoundMessage={APP_WORDS.NOTHING_FOUND}
                    clearable
                    {...form.getInputProps("eje_id")}
                />
                <TextInput
                    radius="sm"
                    label="Objetivo Nacional"
                    withAsterisk
                    placeholder="Digite el objetivo nacional"
                    {...form.getInputProps("objetivo_opn")}
                />
                <BtnSubmit IconSection={IconChecks}>
                    {BTN_TITLES.BTN_SAVE}
                </BtnSubmit>
            </Stack>
        </Box>
    );
};
