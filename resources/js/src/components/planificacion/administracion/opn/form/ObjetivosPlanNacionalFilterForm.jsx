import { Box } from "@mantine/core";
import {
    BtnSubmit,
    FieldFilterForm,
    GobiernoSelect,
} from "../../../../../components";
import { GobiernoFormProvider, useGobiernoForm } from "../../../../../context";
import { BTN_TITLES } from "../../../../../helpers";
import { IconSearch } from "@tabler/icons-react";
import { useOPNStore } from "../../../../../hooks";

export const ObjetivosPlanNacionalFilterForm = () => {
    const { startLoadOPN } = useOPNStore();
    const form = useGobiernoForm({
        mode: "uncontrolled",
        initialValues: {
            gobierno_id: null,
        },
        transformValues: (values) => ({
            ...values,
            gobierno_id: Number(values.gobierno_id) || null,
        }),
    });

    /* useEffect(() => {
        if (!isOpenModalOPN) {
            startLoadGobiernos({});
        }

        return () => {
            startClearGobiernos();
        };
    }, [isOpenModalOPN]); */

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form.getTransformedValues());
        startLoadOPN(form.getTransformedValues())
    };

    return (
        <FieldFilterForm title="Filtrar Objetivos del Plan Nacional">
            <GobiernoFormProvider form={form}>
                <Box
                    component="form"
                    onSubmit={form.onSubmit((_, e) => handleSubmit(e))}
                >
                    <GobiernoSelect />
                    <BtnSubmit IconSection={IconSearch} fontSize={16}>
                        {BTN_TITLES.BTN_SEARCH}
                    </BtnSubmit>
                </Box>
            </GobiernoFormProvider>
        </FieldFilterForm>
    );
};
