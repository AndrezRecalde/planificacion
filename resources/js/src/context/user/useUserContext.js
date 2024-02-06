import { createFormContext } from "@mantine/form";

/* Form para usuario */
export const [UserFormProvider, useUserFormContext, useUserForm] =
    createFormContext();

/* Form para contraseña de usuario */
export const [
    UserChangePwdProvider,
    useUserChangePwdFormContext,
    useUserChangePwdForm,
] = createFormContext();
