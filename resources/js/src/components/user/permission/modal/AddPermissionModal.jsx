import { useEffect } from "react";
import { Modal } from "@mantine/core";
import { AddPermisionForm, TextSection } from "../../../../components";
import {
    usePermissionStore,
    useUiUsuario,
    useUsuarioStore,
} from "../../../../hooks";
import { isNotEmpty, useForm } from "@mantine/form";

export const AddPermissionModal = () => {
    const { isOpenModalAddPermission, modalActionAddPermissions } =
        useUiUsuario();
    const { activateUsuario, setActivateUsuario } = useUsuarioStore();
    const { startLoadPermissions, startClearPermissions } =
        usePermissionStore();

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            expires_at: new Date(),
            permissions: [],
        },
        validate: {
            expires_at: isNotEmpty("Ingrese la fecha limite"),
            permissions: isNotEmpty("Seleccione al menos un permiso a otorgar"),
        },
    });

    useEffect(() => {
        if (isOpenModalAddPermission) {
            startLoadPermissions();
        }

        return () => {
            startClearPermissions();
        };
    }, [isOpenModalAddPermission]);

    const handleCloseModal = () => {
        if (activateUsuario !== null) {
            setActivateUsuario(null);
        }
        modalActionAddPermissions(false);
    };

    return (
        <Modal
            centered
            opened={isOpenModalAddPermission}
            onClose={handleCloseModal}
            size="lg"
            title={
                <TextSection fz={18} fw={700} tt="capitalize">
                    Agregar Permiso
                </TextSection>
            }
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
        >
            <AddPermisionForm form={form} />
        </Modal>
    );
};
