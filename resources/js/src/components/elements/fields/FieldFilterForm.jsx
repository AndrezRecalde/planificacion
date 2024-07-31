import { Fieldset } from "@mantine/core";
import { TextSection } from "../../../components";

export const FieldFilterForm = ({ title, children }) => {
    return (
        <Fieldset legend={<TextSection fw={700} fz={15}>{title}</TextSection>}>
            {children}
        </Fieldset>
    );
};
