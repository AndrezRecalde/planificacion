import { useEffect } from "react";
import { Container, Divider, Grid } from "@mantine/core";
import {
    LineaEstrategiaModal,
    LineapdotModal,
    LineasEstrategicasTable,
    LineaspdotTable,
    TitlePage,
} from "../../../../components";
import { useLestrategiapdotStore, useLineapdotStore } from "../../../../hooks";
import Swal from "sweetalert2";

export const LineasEstrategicasPage = () => {
    const {
        startLoadLineaspdot,
        startClearLineaspdot,
        message: MsgLineapdot,
        errores: ErrLineapdot,
    } = useLineapdotStore();

    const {
        startLoadLestrategiapdots,
        startClearLestrategiapdot,
        message: MsgLestrategia,
        errores: ErrLestrategia,
    } = useLestrategiapdotStore();

    useEffect(() => {
        startLoadLineaspdot();
        startLoadLestrategiapdots();

        return () => {
            startClearLineaspdot();
            startClearLestrategiapdot();
        };
    }, []);

    useEffect(() => {
        if (MsgLineapdot !== undefined) {
            Swal.fire({
                icon: MsgLineapdot.status,
                text: MsgLineapdot.msg,
                showConfirmButton: false,
                timer: 1500,
            });
            return;
        }
    }, [MsgLineapdot]);

    useEffect(() => {
        if (MsgLestrategia !== undefined) {
            Swal.fire({
                icon: MsgLestrategia.status,
                text: MsgLestrategia.msg,
                showConfirmButton: false,
                timer: 1500,
            });
            return;
        }
    }, [MsgLestrategia]);

    useEffect(() => {
        if (ErrLineapdot !== undefined) {
            Swal.fire({
                icon: "error",
                title: "Opps...",
                text: ErrLineapdot,
                showConfirmButton: false,
                timer: 1500,
            });
            return;
        }
    }, [ErrLineapdot]);

    useEffect(() => {
        if (ErrLestrategia !== undefined) {
            Swal.fire({
                icon: "error",
                title: "Opps...",
                text: ErrLestrategia,
                showConfirmButton: false,
                timer: 1500,
            });
            return;
        }
    }, [ErrLestrategia]);

    return (
        <Container size="xxl">
            <TitlePage order={2} ta="left">
                Lineas Estrategicas
            </TitlePage>
            <Divider my="md" />
            <Grid>
                <Grid.Col span={{ base: 12, sm: 8, md: 8, lg: 8 }}>
                    <LineasEstrategicasTable />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 4, md: 4, lg: 4 }}>
                    <LineaspdotTable />
                </Grid.Col>
            </Grid>
            <LineapdotModal />
            <LineaEstrategiaModal />
        </Container>
    );
};
