import { useEffect } from "react";
import { Container, Divider } from "@mantine/core";
import {
    CategoriapdotModal,
    CategoriapdotTable,
    StatusModal,
    TitlePage,
} from "../../../../components";
import { useCategoriapdotStore, useUiCategoriapdot } from "../../../../hooks";
import Swal from "sweetalert2";

export const CategoriaspdotPage = () => {
    const {
        startLoadCategoriaspdot,
        startClearCategoriapdot,
        startUpdateStatusCategoriapdot,
        activateCategoriapdot,
        setActivateCategoriapdot,
        message,
        errores,
    } = useCategoriapdotStore();

    const { isOpenModalStatusCategoriapdot, modalActionStatusCategoriapdot } =
        useUiCategoriapdot();

    useEffect(() => {
        startLoadCategoriaspdot({});

        return () => {
            startClearCategoriapdot();
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
                Categorias del PDOT
            </TitlePage>
            <Divider my="md" />

            <CategoriapdotTable />

            <CategoriapdotModal />
            <StatusModal
                isOpenModal={isOpenModalStatusCategoriapdot}
                modalAction={modalActionStatusCategoriapdot}
                titleModal="Activar/Desactivar Elemento"
                startAction={startUpdateStatusCategoriapdot}
                activateElement={activateCategoriapdot}
                setActivate={setActivateCategoriapdot}
            />
        </Container>
    );
};
