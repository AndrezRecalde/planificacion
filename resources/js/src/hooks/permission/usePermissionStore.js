import { useDispatch, useSelector } from "react-redux";
import {
    onClearPermissions,
    onLoadErrores,
    onLoading,
    onLoadPermissions,
} from "../../store/permission/permissionSlice";
import { useErrorException } from "../../hooks";
import planningApi from "../../api/planningApi";
import { API_URL_ROUTES, PREFIX_ROUTES } from "../../helpers";

export const usePermissionStore = () => {
    const { isLoading, permissions, activatePermission, message, errores } =
        useSelector((state) => state.permission);
    const { ExceptionMessageError } = useErrorException(onLoadErrores);
    const dispatch = useDispatch();

    const startLoadPermissions = async () => {
        try {
            dispatch(onLoading(true));
            const { data } = await planningApi.get(
                PREFIX_ROUTES.PLANIFICACION + API_URL_ROUTES.GET_PERMISSIONS
            );
            const { permissions } = data;
            dispatch(onLoadPermissions(permissions));
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startClearPermissions = () => {
        dispatch(onClearPermissions());
    }

    return {
        isLoading,
        permissions,
        activatePermission,
        message,
        errores,

        startLoadPermissions,
        startClearPermissions
    };
};
