import { Box } from "@mantine/core";
import { BtnSubmit, DepartamentoSelect, FieldFilterForm } from "../../../../components";
import {
    DepartamentoFormProvider,
    useDepartamentoForm,
    useDepartamentoFormContext,
} from "../../../../context";
import { useUsuarioStore } from "../../../../hooks";
import { IconSearch } from "@tabler/icons-react";
import { BTN_TITLES } from "../../../../helpers";

export const PermissionsFilterForm = () => {

    const { startLoadUsuarios } = useUsuarioStore();

    const form = useDepartamentoForm({
        mode: "uncontrolled",
        initialValues: {
            departamento_id: null,
        },
        transformValues: (values) => ({
            ...values,
            departamento_id: Number(values.departamento_id) || null,
        }),
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form.getTransformedValues());
        startLoadUsuarios(form.getTransformedValues());
    };

    return (
        <FieldFilterForm title="Filtrar Responsables de área">
            <DepartamentoFormProvider form={form}>
                <Box
                    component="form"
                    onSubmit={form.onSubmit((_, e) => handleSubmit(e))}
                >
                    <DepartamentoSelect rootContext={useDepartamentoFormContext} />
                    <BtnSubmit IconSection={IconSearch} fontSize={16}>
                        {BTN_TITLES.BTN_SEARCH}
                    </BtnSubmit>
                </Box>
            </DepartamentoFormProvider>
        </FieldFilterForm>
    );
};
