import { useCallback, useEffect, useState } from "react";
import {
    Box,
    Divider,
    FileInput,
    Group,
    Image,
    Stack,
    TextInput,
} from "@mantine/core";
import { BtnSubmit } from "../../../../../components";
import { BTN_TITLES } from "../../../../../helpers";
import { IconChecks } from "@tabler/icons-react";
import {
    useOdssostenibleStore,
    useUiOdssostenible,
} from "../../../../../hooks";

export const OdssostenibleForm = ({ form }) => {
    const {
        startAddOdssostenible,
        activateOdssostenible,
        setActivateOdssostenible,
    } = useOdssostenibleStore();

    const { modalActionOdssostenible } = useUiOdssostenible();
    const [preview, setPreview] = useState(null);
    const [file, setFile] = useState(null);

    useEffect(() => {
        if (activateOdssostenible) {
            form.setValues({ ...activateOdssostenible });
            const imageUrl = '/storage' + activateOdssostenible.imagen_url;
            setPreview(imageUrl);

            fetch(imageUrl)
                .then(response => response.blob())
                .then(blob => {
                    const file = new File([blob], activateOdssostenible.imagen_url, { type: blob.type });
                    setFile(file);
                    form.setFieldValue("imagen_url", file);
                });
        }
    }, [activateOdssostenible]);

    const handleImageChange = useCallback((file) => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setPreview(reader.result);
            reader.readAsDataURL(file);
            setFile(file);
        } else {
            setPreview(null);
            setFile(null);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form.getTransformedValues());
        startAddOdssostenible(form.getValues());
        if (activateOdssostenible !== null) {
            setActivateOdssostenible(null);
        }
        modalActionOdssostenible(false);
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
                    label="Objetivo de Desarrollo Sostenible"
                    withAsterisk
                    placeholder="Digite el objetivo"
                    key={form.key("nombre_ods")}
                    {...form.getInputProps("nombre_ods")}
                />
                <FileInput
                    withAsterisk
                    radius="sm"
                    label="Logo Objetivo"
                    placeholder="Seleccione el logo"
                    accept="image/png,image/jpeg,image/jpeg"
                    key={form.key("imagen_url")}
                    {...form.getInputProps("imagen_url")}
                    onChange={(file) => {
                        form.setFieldValue("imagen_url", file);
                        handleImageChange(file);
                    }}
                />
                {preview && (
                    <Group justify="center">
                        <Image
                            src={preview}
                            alt="Vista previa"
                            fit="contain"
                            maw={100}
                        />
                    </Group>
                )}
                <BtnSubmit IconSection={IconChecks}>
                    {BTN_TITLES.BTN_SAVE}
                </BtnSubmit>
            </Stack>
        </Box>
    );
};
