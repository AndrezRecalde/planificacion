import { Container, Image, SimpleGrid } from "@mantine/core";
import { BtnSection, TextSection, TitlePage } from "../../components";
import classes from "../../assets/styles/error/NotFound.module.css";
import { IconBackground } from "@tabler/icons-react";

export const ErrorNotFound = () => {
    return (
        <Container className={classes.root}>
            <SimpleGrid
                spacing={{ base: 40, sm: 80 }}
                cols={{ base: 1, sm: 2 }}
            >
                <Image
                    src="https://prefecturadeesmeraldas.gob.ec/wp-content/uploads/2024/07/9656141.jpg"
                    className={classes.mobileImage}
                />
                <div>
                    <TitlePage className={classes.title}>
                        Algo no está bien...
                    </TitlePage>
                    <TextSection tt="" fz={18} fw={300} color="dimmed">
                        La página que estás intentando acceder no existe. Es
                        posible que hayas escrito mal la dirección o que la
                        página se haya movido a otra URL.
                    </TextSection>
                    <TextSection tt="" fz={18} fw={300} color="dimmed" className={classes.phras}>
                        Si cree que se trata de un error, comuníquese con el
                        soporte.
                    </TextSection>
                    <BtnSection
                        variant="outline"
                        mt="xl"
                        className={classes.control}
                        icon={IconBackground}
                    >
                        Regresar al perfil
                    </BtnSection>
                </div>
                <Image
                    src="https://prefecturadeesmeraldas.gob.ec/wp-content/uploads/2024/07/9656141.jpg"
                    className={classes.desktopImage}
                />
            </SimpleGrid>
        </Container>
    );
};
