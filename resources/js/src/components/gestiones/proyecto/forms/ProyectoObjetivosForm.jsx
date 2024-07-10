import { MultiSelect, Stack } from "@mantine/core";

export const ProyectoObjetivosForm = ({ form }) => {
    return (
        <Stack>
            <MultiSelect
                label="Your favorite libraries"
                placeholder="Pick value"
                data={["React", "Angular", "Vue", "Svelte"]}
                searchable
                nothingFoundMessage="Nothing found..."
            />
            <MultiSelect
                label="Your favorite libraries"
                placeholder="Pick value"
                data={["React", "Angular", "Vue", "Svelte"]}
                searchable
                nothingFoundMessage="Nothing found..."
            />
        </Stack>
    );
};
