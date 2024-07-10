import { Modal } from "@mantine/core";
import { TextSection } from "../../../../components";
import { APP_WORDS } from "../../../../helpers";
import { hasLength, isNotEmpty, useForm } from "@mantine/form";

export const ActividadModalCreate = () => {

    const form = useForm({
        initialValues:{
            nombre_actividad: "",
            tipoactividad_id: "",
            proyecto_id: "",
            tablero_id: "",
            estado_id: 1
        },
        validate: {
            nombre_actividad: hasLength({ min: 10, max: 500 }, "Por favor el nombre de la actividad debe tener un rango de 10 a 500 carácteres"),
            tipoactividad_id: isNotEmpty("Por favor seleccione el tipo de actividad"),

        }
    });

    const handleCloseModal = () => {
        console.log('clic');
    }

    return (
        <Modal
            opened={true}
            onClose={handleCloseModal}
            title={
                <TextSection fz={18} fw={700} tt="capitalize">
                    {APP_WORDS.ACTIVIDAD_TITLE_MODAL}
                </TextSection>
            }
            size="md"
            centered
            radius="md"
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
        >

        </Modal>
    );
};
