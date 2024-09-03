import { YearPickerInput } from "@mantine/dates";

export const DateYearForm = ({ input, rootContext }) => {
    const form = rootContext();

    return (
        <YearPickerInput
            label="Seleccione el año"
            placeholder="seleccione el año a filtrar"
            value={new Date()}
            {...form.getInputProps(input)}
        />
    );
};
