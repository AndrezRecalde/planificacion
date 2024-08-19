import { Modal } from "@mantine/core";
import { useProveedorStore, useUiProveedor } from "../../../../hooks";
import { ProveedorForm, TextSection } from "../../../../components";
import { APP_WORDS } from "../../../../helpers";
import { hasLength, isNotEmpty, useForm } from "@mantine/form";

export const ProveedorModal = () => {
    const { activateProveedor, setActivateProveedor } = useProveedorStore();
    const { isOpenModalProveedor, modalActionProveedor } = useUiProveedor();

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            nombre_proveedor: '',
            ruc: '',
            telefono: '',
        },

        validate: {
            nombre_proveedor: isNotEmpty('Ingresa el nombre del proveedor'),
            ruc: hasLength({ min: 10, max: 15 }, 'El RUC debe contener minimo 10 y máximo 15 digitos'),
            telefono: hasLength({ min: 8, max: 15 }, 'El teléfono debe contener minimo 8 y máximo 15 digitos'),
        },
    });

    const handleCloseModal = () => {
        if (activateProveedor !== null) {
            setActivateProveedor(null);
        }
        modalActionProveedor(0);
        form.reset();
    };
    return (
        <Modal
            opened={isOpenModalProveedor}
            onClose={handleCloseModal}
            title={
                <TextSection fz={18} fw={700} tt="capitalize">
                    {APP_WORDS.PROVEEDOR_TITLE_MODAL}
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
            <ProveedorForm form={form} />
        </Modal>
    );
};
