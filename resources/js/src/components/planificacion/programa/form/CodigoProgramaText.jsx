import { TextInput } from "@mantine/core";
import { APP_WORDS } from "../../../../helpers";

export const CodigoProgramaText = ({ rootContext }) => {

    const form = rootContext();

    return (
        <TextInput
            radius="sm"
            label={APP_WORDS.PROGRAMA_TEXT_NAME}
            placeholder={APP_WORDS.PROGRAMA_PLACEHOLDER_NAME}
            key={form.key("codigo_programa")}
            {...form.getInputProps("codigo_programa")}
        />
    );
};
