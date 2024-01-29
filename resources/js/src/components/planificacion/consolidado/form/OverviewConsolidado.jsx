import { Fieldset, SimpleGrid, Text, TextInput } from "@mantine/core";


export const OverviewConsolidado = () => {
    return (
        <Fieldset legend={<Text>Resumen presupuestario</Text>} mt={10} mb={10}>
            <SimpleGrid cols={1} mt={10}>
                <TextInput
                    label="Total proyectos ingresados"
                    placeholder="11"
                />
                <TextInput
                    label="Monto total de proyectos ingresados"
                    placeholder="21,567.335.53"
                />
                <TextInput
                    label="Monto total de proyectos en ejecución"
                    placeholder="20,165.244.53"
                />
            </SimpleGrid>
        </Fieldset>
    );
};
