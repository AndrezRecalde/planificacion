import { Modal } from "@mantine/core";
import { GobiernoForm, TextSection } from "../../../../../components";
import { useGobiernoStore, useUiGobierno } from "../../../../../hooks";
import { isNotEmpty, useForm } from "@mantine/form";
import dayjs from "dayjs";

export const GobiernoModal = () => {
    const { activateGobierno, setActivateGobierno } = useGobiernoStore();
    const { isOpenModalGobierno, modalActionGobierno } = useUiGobierno();

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            nombre_gobierno: "",
            presidente: "",
            vicepresidente: "",
            fecha_inicio: new Date(),
            fecha_fin: new Date(),
        },
        validate: {
            nombre_gobierno: isNotEmpty(
                "Por favor ingrese el nombre del gobierno"
            ),
            presidente: isNotEmpty(
                "Por favor ingrese el nombre del presidente"
            ),
            vicepresidente: isNotEmpty(
                "Por favor ingrese el nombre del vicepresidente"
            ),
            fecha_inicio: isNotEmpty("Por favor ingrese el inicio del periodo"),
            fecha_fin: isNotEmpty("Por favor ingrese el final del periodo"),
        },
        transformValues: (values) => ({
            ...values,
            fecha_inicio: dayjs(values.fecha_inicio).year(),
            fecha_fin: dayjs(values.fecha_fin).year()
        }),
    });

    const handleCloseModal = () => {
        modalActionGobierno(false);
        if (activateGobierno !== null) {
            setActivateGobierno(null);
        }
        form.reset();
    };

    return (
        <Modal
            opened={isOpenModalGobierno}
            onClose={handleCloseModal}
            size="lg"
            title={
                <TextSection fz={18} fw={700} tt="capitalize">
                    Ficha Gobierno
                </TextSection>
            }
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
        >
            <GobiernoForm form={form} />
        </Modal>
    );
};
