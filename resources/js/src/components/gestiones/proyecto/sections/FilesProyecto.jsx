import { Button, Container, Group, SimpleGrid } from "@mantine/core";
import { AlertSection, FolderFiles, TitlePage } from "../../../../components";
import { IconInfoCircle } from "@tabler/icons-react";

export const FilesProyecto = () => {
    return (
        <Container size="xl" my="md">
            <Group justify="space-between">
                <TitlePage order={4} ta="left">
                    Archivos del proyecto
                </TitlePage>
                <Button variant="light" color="yellow.7">
                    Agregar carpeta
                </Button>
            </Group>
            <AlertSection
                variant="light"
                color="yellow.7"
                icon={IconInfoCircle}
                title="Información"
                text="Crea carpetas para ordenar los archivos de los proyectos"
            />

            <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 4 }}
                spacing={{ base: 10, sm: "md" }}
                verticalSpacing={{ base: "md", sm: "xl" }}
            >
                <FolderFiles />
            </SimpleGrid>
        </Container>
    );
};
