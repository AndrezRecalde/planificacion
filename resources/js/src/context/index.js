import {
    UserFormProvider,
    useUserFormContext,
    useUserForm,
    UserChangePwdProvider,
    useUserChangePwdFormContext,
    useUserChangePwdForm,
} from "./user/useUserContext";

import {
    DatesFormProvider,
    useDatesFormContext,
    useDatesForm,

    GobiernoFormProvider,
    useGobiernoFormContext,
    useGobiernoForm,

    DepartamentoFormProvider,
    useDepartamentoFormContext,
    useDepartamentoForm,

    ProgramaFormProvider,
    useProgramaFormContext,
    useProgramaForm,
} from "./fields/useFilterFormsContext";

export {
    /* FORM PARA USUARIO */
    UserFormProvider,
    useUserFormContext,
    useUserForm,

    /* FORM CONTRASEÑA DE USUARIO */
    UserChangePwdProvider,
    useUserChangePwdFormContext,
    useUserChangePwdForm,

    /* FORM FILTER CAMPOS DE FECHAS */
    DatesFormProvider,
    useDatesFormContext,
    useDatesForm,

    /* FORM SELECT FILTER GOBIERNO */
    GobiernoFormProvider,
    useGobiernoFormContext,
    useGobiernoForm,

    /* FORM SELECT FILTER DEPARTAMENTO */
    DepartamentoFormProvider,
    useDepartamentoFormContext,
    useDepartamentoForm,

    /* FORM SELECT FILTER PROGRAMAS */
    ProgramaFormProvider,
    useProgramaFormContext,
    useProgramaForm,
};
