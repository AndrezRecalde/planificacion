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
} from "./fields/useDatesContext";

export {
    /* FORM PARA USUARIO */
    UserFormProvider,
    useUserFormContext,
    useUserForm,

    /* FORM CONTRASEÑA DE USUARIO */
    UserChangePwdProvider,
    useUserChangePwdFormContext,
    useUserChangePwdForm,

    /* FORM CAMPOS DE FECHAS */
    DatesFormProvider,
    useDatesFormContext,
    useDatesForm,
};
