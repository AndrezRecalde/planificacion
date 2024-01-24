import {
    ActionIcon,
    Alert,
    Button,
    Container,
    Group,
    Image,
    SimpleGrid,
    Text,
    ThemeIcon,
    UnstyledButton,
} from "@mantine/core";
import { TitlePage } from "../../../../components";
import {
    IconFolder,
    IconFolderFilled,
    IconFolderOpen,
    IconInfoCircle,
} from "@tabler/icons-react";
import folder from "../../../../assets/images/folder_k.png";
import classes from "./SectionsModule/Section.module.css";

export const FilesProyecto = () => {
    const icon = <IconInfoCircle />;
    return (
        <Container size="xl" my="md">
            <Group justify="space-between">
            <TitlePage order={4} ta="left" title="Archivos del proyecto" />
            <Button variant="light" color="yellow.7">Agregar carpeta</Button>
            </Group>
            <Alert
                variant="light"
                color="yellow.7"
                title={<Text fz={16}>Información</Text>}
                icon={icon}
                mt={10}
                mb={20}
            >
                Crea carpetas para ordenar los archivos de los proyectos
            </Alert>
            <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 4 }}
                spacing={{ base: 10, sm: "md" }}
                verticalSpacing={{ base: "md", sm: "xl" }}
            >
                <Group>
                    <UnstyledButton
                        onClick={() => console.log("clic")}
                    >
                        <Image
                            radius="lg"
                            h={80}
                            w="auto"
                            fit="contain"
                            src={folder}
                        />
                        <Text ta="center">Nueva carpeta</Text>
                    </UnstyledButton>
                </Group>
                <Group>
                    <UnstyledButton
                        onClick={() => console.log("clic")}
                        className={classes.folder}
                    >
                        <Image
                            radius="md"
                            h={80}
                            w="auto"
                            fit="contain"
                            src={folder}
                        />
                        <Text ta="center">Nueva carpeta</Text>
                    </UnstyledButton>
                </Group>
                <Group>
                    <UnstyledButton
                        onClick={() => console.log("clic")}
                        className={classes.folder}
                    >
                        <Image
                            radius="md"
                            h={80}
                            w="auto"
                            fit="contain"
                            src={folder}
                        />
                        <Text ta="center">Nueva carpeta</Text>
                    </UnstyledButton>
                </Group>
                <Group>
                    <UnstyledButton
                        onClick={() => console.log("clic")}
                        className={classes.folder}
                    >
                        <Image
                            radius="md"
                            h={80}
                            w="auto"
                            fit="contain"
                            src={folder}
                        />
                        <Text ta="center">Nueva carpeta</Text>
                    </UnstyledButton>
                </Group>
                <Group>
                    <UnstyledButton
                        onClick={() => console.log("clic")}
                        className={classes.folder}
                    >
                        <Image
                            radius="md"
                            h={80}
                            w="auto"
                            fit="contain"
                            src={folder}
                        />
                        <Text ta="center">Nueva carpeta</Text>
                    </UnstyledButton>
                </Group>
            </SimpleGrid>
        </Container>
    );
};
