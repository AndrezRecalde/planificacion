import { Container, Image, SimpleGrid } from "@mantine/core";
import { BtnSection, TextSection, TitlePage } from "../../components";
import classes from '../../assets/styles/error/NotFound.module.css';


export const ErrorNotFound = () => {
    return (
        <Container className={classes.root}>
            <SimpleGrid
                spacing={{ base: 40, sm: 80 }}
                cols={{ base: 1, sm: 2 }}
            >
                <Image src="https://prefecturadeesmeraldas.gob.ec/wp-content/uploads/2024/07/9656141.jpg" className={classes.mobileImage} />
                <div>
                    <TitlePage className={classes.title}>
                        Algo no está bien...
                    </TitlePage>
                    <TextSection fz={22} fw={500} color="dimmed">
                        Page you are trying to open does not exist. You may have
                        mistyped the address, or the page has been moved to
                        another URL. If you think this is an error contact
                        support.
                    </TextSection>
                    <BtnSection
                        variant="outline"
                        mt="xl"
                        className={classes.control}
                    >
                        Regresar al perfil
                    </BtnSection>
                </div>
                <Image src="https://prefecturadeesmeraldas.gob.ec/wp-content/uploads/2024/07/9656141.jpg" className={classes.desktopImage} />
            </SimpleGrid>
        </Container>
    );
};
