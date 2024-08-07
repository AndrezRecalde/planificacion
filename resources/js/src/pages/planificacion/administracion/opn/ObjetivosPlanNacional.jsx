import { Container, Divider, Group } from "@mantine/core";
import {
    ObjetivosPlanNacionalFilterForm,
    ObjetivosPlanNacionalModal,
    ObjetivosPlanNacionalTable,
    TitlePage,
} from "../../../../components";
import { useGobiernoStore, useOPNStore } from "../../../../hooks";
import { useEffect } from "react";
import Swal from "sweetalert2";

export const ObjetivosPlanNacional = () => {
    const { message, errores } = useOPNStore();
    const { startLoadGobiernos, startClearGobiernos } = useGobiernoStore();

    useEffect(() => {
        startLoadGobiernos({});

      return () => {
        startClearGobiernos();
      }
    }, [])


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
            <Group justify="space-between">
                <TitlePage order={2} ta="left">
                    Objetivos del Plan Nacional de Desarrollo
                </TitlePage>
            </Group>
            <Divider my="md" />
            <ObjetivosPlanNacionalFilterForm />
            <ObjetivosPlanNacionalTable />

            <ObjetivosPlanNacionalModal />
        </Container>
    );
};
