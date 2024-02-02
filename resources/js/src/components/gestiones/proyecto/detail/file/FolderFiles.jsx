import { Group, UnstyledButton, Image } from "@mantine/core";
import { TextSection } from "../../../../../components";
import folder from "../../../../../assets/images/folder_k.png";

export const FolderFiles = () => {
    return (
        <Group>
            <UnstyledButton onClick={() => console.log("clic")}>
                <Image radius="lg" h={80} w="auto" fit="contain" src={folder} />
                <TextSection ta="center" tt="" fw={500}>
                    Nueva Carpeta
                </TextSection>
            </UnstyledButton>
        </Group>
    );
};
