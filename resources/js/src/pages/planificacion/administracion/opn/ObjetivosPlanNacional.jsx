import { Container, Divider } from "@mantine/core";
import { TitlePage } from "../../../../components";
import { useOPNStore } from "../../../../hooks";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { ObjetivosPlanNacionalTable } from "../../../../components/planificacion/administracion/opn/table/ObjetivosPlanNacionalTable";

export const ObjetivosPlanNacional = () => {
    const { message, errores } = useOPNStore();


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
                Objetivos del Plan Nacional de Desarrollo
            </TitlePage>
            <Divider my="md" />
            <ObjetivosPlanNacionalTable />
        </Container>
    );
};
