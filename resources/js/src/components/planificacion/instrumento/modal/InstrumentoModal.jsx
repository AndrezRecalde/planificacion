import { Modal } from "@mantine/core";
import { useInstrumentoStore, useUiInstrumento } from "../../../../hooks";
import { isNotEmpty, useForm } from "@mantine/form";
import { InstrumentoForm, TextSection } from "../../../../components";
import dayjs from "dayjs";

export const InstrumentoModal = () => {
    const { activateInstrumento, setActivateInstrumento } =
        useInstrumentoStore();
    const { isOpenModalInstrumento, modalActionInstrumento } =
        useUiInstrumento();

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            nombre_archivo: "",
            archivo: null,
            fecha_inicio: new Date(),
            fecha_fin: new Date(),
        },
        validate: {
            nombre_archivo: isNotEmpty(
                "Por favor ingrese el nombre al archivo"
            ),
            archivo: isNotEmpty("Por favor ingrese el archivo"),
            fecha_inicio: isNotEmpty("Por favor ingrese el inicio del periodo"),
            fecha_fin: isNotEmpty("Por favor ingrese el final del periodo"),
        },
        transformValues: (values) => ({
            ...values,
            fecha_inicio: dayjs(values.fecha_inicio).year(),
            fecha_fin: dayjs(values.fecha_fin).year(),
        }),
    });

    const handleCloseModal = () => {
        if (activateInstrumento !== null) {
            setActivateInstrumento(null);
        }
        modalActionInstrumento(false);
        form.reset();
    };

    return (
        <Modal
            opened={isOpenModalInstrumento}
            onClose={handleCloseModal}
            size="lg"
            title={
                <TextSection fz={18} fw={700} tt="capitalize">
                    Instrumento de Planificación
                </TextSection>
            }
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
        >
            <InstrumentoForm form={form} />
        </Modal>
    );
};
