import { Fieldset } from "@mantine/core";
import { TextSection } from "../../../components";

export const FieldFilterForm = ({ title, children }) => {
    return (
        <Fieldset
            variant="filled"
            mt={20}
            mb={20}
            legend={
                <TextSection tt="" fw={700} fz={15}>
                    {title}
                </TextSection>
            }
        >
            {children}
        </Fieldset>
    );
};
