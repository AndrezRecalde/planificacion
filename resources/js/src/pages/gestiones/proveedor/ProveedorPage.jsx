import { useEffect } from "react";
import { Container, Divider, Group } from "@mantine/core";
import {
    ProveedorList,
    TitlePage,
    TextSection,
    BtnSection,
    ProveedorModal,
} from "../../../components";
import { IconLibraryPlus } from "@tabler/icons-react";
import { useProveedorStore, useUiProveedor } from "../../../hooks";
import { APP_WORDS, BTN_TITLES } from "../../../helpers";
import Swal from "sweetalert2";

export const ProveedorPage = () => {
    const usuario = JSON.parse(localStorage.getItem("service_user"));
    const {
        proveedores,
        startLoadProveedores,
        startClearProveedores,
        setActivateProveedor,
        message,
        errores,
    } = useProveedorStore();
    const { modalActionProveedor } = useUiProveedor();

    useEffect(() => {
        startLoadProveedores(usuario.departamento_id);

        return () => {
            startClearProveedores();
        };
    }, []);

    useEffect(() => {
        if (message !== undefined) {
            Swal.fire({
                icon: message.status,
                text: message.msg,
                showConfirmButton: false,
                timer: 1500,
            });
            return;
        }
    }, [message]);

    useEffect(() => {
        if (errores !== undefined) {
            Swal.fire({
                icon: "error",
                title: "Opps...",
                text: errores,
                showConfirmButton: false,
                timer: 1500,
            });
            return;
        }
    }, [errores]);

    const handleOpenModal = (e) => {
        e.preventDefault();
        setActivateProveedor(null);
        modalActionProveedor(1);
    };

    return (
        <Container size="xl">
            <Group justify="space-between">
                <div>
                    <TitlePage order={2} ta="left">
                        {APP_WORDS.PROVEEDOR_TITLE}
                    </TitlePage>
                    <TextSection tt="">
                        {usuario.siglas} tiene {proveedores.length ?? 0}{" "}
                        proveedores registrados
                    </TextSection>
                </div>
                <div>
                    <BtnSection
                        heigh={45}
                        variant="default"
                        icon={IconLibraryPlus}
                        handleAction={handleOpenModal}
                    >
                        {BTN_TITLES.PROVEEDOR_BTN_MODAL}
                    </BtnSection>
                </div>
            </Group>
            <Divider my="md" />
            <ProveedorList />
            <ProveedorModal />
        </Container>
    );
};
