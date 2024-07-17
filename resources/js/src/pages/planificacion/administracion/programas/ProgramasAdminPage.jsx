import { Container, Divider, Paper, SimpleGrid } from "@mantine/core";
import { BtnSection, TextSection, TitlePage } from "../../../../components";
import { IconChevronsRight } from "@tabler/icons-react";
import classes from "../../../../assets/styles/planificacion/administracion/programas/ProgramasAdmin.module.css";

export const ProgramasAdminPage = () => {
    return (
        <Container size="xxl">
            <TitlePage order={2} ta="left">
                Administrar Programas
            </TitlePage>
            <Divider my="md" />
            <SimpleGrid
                cols={{ base: 1, sm: 2, md: 3, lg: 3 }}
                spacing={{ base: 10, sm: "xl" }}
                verticalSpacing={{ base: "md", sm: "xl" }}
            >
                <Paper shadow="md" p="xl" radius="md" className={classes.card}>
                    <div>
                        <TextSection className={classes.category} fz={12}>
                            GFP
                        </TextSection>
                        <TitlePage order={6} className={classes.title}>
                            Gestión de Fomento Productivo
                        </TitlePage>
                    </div>
                    <BtnSection
                        variant="white"
                        handleAction={() => console.log("clic")}
                        icon={IconChevronsRight}
                    >
                        Ver programas
                    </BtnSection>
                </Paper>
            </SimpleGrid>
        </Container>
    );
};
