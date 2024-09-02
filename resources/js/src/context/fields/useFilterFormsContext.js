import { createFormContext } from "@mantine/form";

export const [DatesFormProvider, useDatesFormContext, useDatesForm] =
    createFormContext();

export const [GobiernoFormProvider, useGobiernoFormContext, useGobiernoForm] =
    createFormContext();

export const [
    DepartamentoFormProvider,
    useDepartamentoFormContext,
    useDepartamentoForm,
] = createFormContext();

export const [ProgramaFormProvider, useProgramaFormContext, useProgramaForm] =
    createFormContext();
