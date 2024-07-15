import { Container, Divider } from "@mantine/core";
import { CategoriapdotTable, TitlePage } from "../../../../components";

export const CategoriaspdotPage = () => {
    return (
        <Container size="xxl">
            <TitlePage order={2} ta="left">
                Categorias del PDOT
            </TitlePage>
            <Divider my="md" />

            <CategoriapdotTable />
        </Container>
    );
};
