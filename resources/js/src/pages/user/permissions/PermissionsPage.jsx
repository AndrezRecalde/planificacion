import { useEffect } from "react";
import { Container, Divider } from "@mantine/core";
import { TitlePage } from "../../../components";
import { useDepartamentoStore } from "../../../hooks";
import Swal from "sweetalert2";

export const PermissionsPage = () => {
    const { startLoadDepartamentos, startClearDepartamentos } =
        useDepartamentoStore();

    useEffect(() => {
        startLoadDepartamentos();

        return () => {
            startClearDepartamentos();
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

    return (
        <Container size="xxl">
            <TitlePage order={2} ta="left">
                Permisiones de Usuarios
            </TitlePage>
            <Divider my="md" />
        </Container>
    );
};
