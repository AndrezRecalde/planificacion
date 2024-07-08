import { Modal } from "@mantine/core";
import { ProyectoForm, TextSection } from "../../../../components";
import { useUiProyecto } from "../../../../hooks";
import { APP_WORDS } from "../../../../helpers";
import { useForm } from "@mantine/form";

export const ProyectoModal = () => {
    const { isOpenModalProyecto, modalActionProyecto } = useUiProyecto();

    const form = useForm({

    });

    const handleCloseModal = () => {
        modalActionProyecto(0);
    }

    return (
        <Modal
            opened={isOpenModalProyecto}
            onClose={handleCloseModal}
            title={
                <TextSection fz={18} fw={700} tt="capitalize">
                    {APP_WORDS.PROYECTO_TITLE_MODAL}
                </TextSection>
            }
            size="xl"
            radius="md"
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
        >
            <ProyectoForm form={form} />
        </Modal>
    );
};
