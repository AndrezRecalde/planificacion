import { useEffect } from "react";
import { Container, Divider } from "@mantine/core";
import { PermissionsFilterForm, PermissionsTable, TitlePage } from "../../../components";
import { useDepartamentoStore, useUsuarioStore } from "../../../hooks";
import Swal from "sweetalert2";

export const PermissionsPage = () => {
    const usuario = JSON.parse(localStorage.getItem("service_user"));
    const { startClearUsuarios, message, errores } = useUsuarioStore();
    const { startLoadDepartamentos, startClearDepartamentos } =
        useDepartamentoStore();

    useEffect(() => {
        startLoadDepartamentos({ institucion_id: usuario.institucion_id });

        return () => {
            startClearDepartamentos();
            startClearUsuarios();
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

            <PermissionsFilterForm />
            <PermissionsTable />
        </Container>
    );
};
