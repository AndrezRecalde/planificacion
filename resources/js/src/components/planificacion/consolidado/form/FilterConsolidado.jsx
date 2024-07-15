import { Fieldset, SimpleGrid, Text } from "@mantine/core";
import { BtnSubmit, DataCombobox } from "../../../../components";
import { IconSearch } from "@tabler/icons-react";

export const FilterConsolidado = () => {
    return (
        <Fieldset legend={<Text>Filtrar programa</Text>} mt={10} mb={10}>
            <SimpleGrid cols={1} mt={10}>
                <DataCombobox />
                <DataCombobox />
            </SimpleGrid>
            <BtnSubmit
                text="Buscar"
                IconSection={IconSearch}
                heigh={40}
                fontSize={16}
            >
                Buscar
            </BtnSubmit>
        </Fieldset>
    );
};
