import { Card, Container, Group } from "@mantine/core";
import { BtnSection, InputSeach, MilestoneList, TitlePage } from "../../../../components";
import classes from "./SectionsModule/Section.module.css";

export const MilestonesProyecto = () => {
    return (
        <Container size="xl" my="md">
            <Group justify="space-between">
                <TitlePage order={4} ta="left" title="Hitos del proyecto" />
                <BtnSection>Agregar hito</BtnSection>
            </Group>
            <InputSeach texto="Buscar hito" />
            <Card
                withBorder
                radius="md"
                mt="md"
                mb="md"
                p={0}
                className={classes.card}
            >
               <MilestoneList classes={classes} />
            </Card>
        </Container>
    );
};
