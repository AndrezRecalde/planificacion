import { Fieldset, SimpleGrid, Text } from "@mantine/core";
import { BtnSubmit, DataCombobox } from "../../..";
import { IconSearch } from "@tabler/icons-react";

export const FilterFormProgramaPlan = () => {
    return (
        <Fieldset legend={<Text>Filtrar programa</Text>} mt={20} mb={20}>
            <SimpleGrid cols={3} mt={10}>
                <DataCombobox />
                <DataCombobox />
                <DataCombobox />
            </SimpleGrid>
            <BtnSubmit
                text="Buscar"
                IconSection={IconSearch}
                heigh={40}
                fontSize={16}
            />
        </Fieldset>
    );
};
