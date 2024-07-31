import {
    Container,
    Divider,
    Group,
    rem,
    TextInput,
    UnstyledButton,
} from "@mantine/core";
import {
    ObjetivosPlanNacionalModal,
    ObjetivosPlanNacionalTable,
    TitlePage,
} from "../../../../components";
import { useOPNStore } from "../../../../hooks";
import { useEffect } from "react";
import { Spotlight, spotlight } from "@mantine/spotlight";
import { IconBuildingBank, IconSearch } from "@tabler/icons-react";
import Swal from "sweetalert2";
import classes from "../../../../assets/styles/layout/AppHeaderModules/AppHeader.module.css";


const actions = Array(100)
    .fill(0)
    .map((_, index) => ({
        id: `action-${index}`,
        label: `Action ${index}`,
        description: `Action ${index} description`,
    }));

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
            <Group justify="space-between">
                <TitlePage order={2} ta="left">
                    Objetivos del Plan Nacional de Desarrollo
                </TitlePage>
                <UnstyledButton
                    className={classes.BtnSearch}
                    onClick={spotlight.open}
                >
                    <TextInput
                        pointer
                        radius="lg"
                        placeholder="Buscar"
                        rightSection={
                            <IconBuildingBank style={{ width: 20, height: 20 }} />
                        }
                    />
                </UnstyledButton>
                <Spotlight
                    actions={actions}
                    nothingFound="Nothing found..."
                    highlightQuery
                    scrollable
                    maxHeight={350}
                    searchProps={{
                        leftSection: (
                            <IconBuildingBank
                                style={{ width: rem(20), height: rem(20) }}
                                stroke={1.5}
                            />
                        ),
                        placeholder: "Search...",
                    }}
                />
            </Group>
            <Divider my="md" />
            <ObjetivosPlanNacionalTable />

            <ObjetivosPlanNacionalModal />
        </Container>
    );
};
