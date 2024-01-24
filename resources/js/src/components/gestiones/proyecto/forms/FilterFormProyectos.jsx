import {
    Fieldset,
    SimpleGrid,
    Text,
} from "@mantine/core";
import { YearPickerInput } from "@mantine/dates";
import { BtnSubmit, DataCombobox } from "../../../../components";
import { IconSearch } from "@tabler/icons-react";

export const FilterFormProyectos = () => {
    return (
        <Fieldset legend={<Text>Filtrar proyectos</Text>} mt={20}>
            <SimpleGrid cols={2} mt={10}>
                <DataCombobox />
                <YearPickerInput label="Año" placeholder="Elige el año" />
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
