import { useDispatch, useSelector } from "react-redux";
import { useErrorException } from "../../../hooks";
import {
    onAddProveedor,
    onClearProveedores,
    onDeleteProveedor,
    onLoadErrores,
    onLoading,
    onLoadMessage,
    onLoadProveedores,
    onSetActivateProveedor,
    onUpdateProveedor,
} from "../../../store/proveedor/proveedorSlice";
import { API_URL_ROUTES, PREFIX_ROUTES } from "../../../helpers";
import planningApi from "../../../api/planningApi";

export const useProveedorStore = () => {
    const { isLoading, proveedores, activateProveedor, message, errores } =
        useSelector((state) => state.proveedor);

    const { ExceptionMessageError } = useErrorException(onLoadErrores);

    const dispatch = useDispatch();

    const startLoadProveedores = async (departamento_id) => {
        try {
            dispatch(onLoading(true));
            const { data } = await planningApi.post(
                PREFIX_ROUTES.GENERAL + API_URL_ROUTES.GET_PROVEEDORES,
                { departamento_id }
            );
            const { proveedores } = data;
            dispatch(onLoadProveedores(proveedores));
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startAddProveedor = async (proveedor) => {
        try {
            if (proveedor.id) {
                const { data } = await planningApi.put(
                    `${
                        PREFIX_ROUTES.GENERAL + API_URL_ROUTES.UPDATE_PROVEEDOR
                    }/${proveedor.id}`,
                    proveedor
                );
                dispatch(onUpdateProveedor({ ...proveedor }));
                dispatch(onLoadMessage(data));
                setTimeout(() => {
                    dispatch(onLoadMessage(undefined));
                }, 40);
                return;
            }
            const { data } = await planningApi.post(
                PREFIX_ROUTES.GENERAL + API_URL_ROUTES.STORE_PROVEEDOR,
                proveedor
            );
            dispatch(onAddProveedor({ ...proveedor }));
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    //INFO: ENDPOINT ADMIN
    const startDeleteProveedor = async (proveedor) => {
        try {
            const { data } = await planningApi.delete(
                `${PREFIX_ROUTES.ADMIN + API_URL_ROUTES.DELETE_PROVEEDOR}/${
                    proveedor.id
                }`
            );
            dispatch(onDeleteProveedor());
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startClearProveedores = () => {
        dispatch(onClearProveedores());
    };

    const setActivateProveedor = (proveedor) => {
        dispatch(onSetActivateProveedor(proveedor));
    };

    return {
        isLoading,
        proveedores,
        activateProveedor,
        message,
        errores,

        startLoadProveedores,
        startAddProveedor,
        startDeleteProveedor,
        startClearProveedores,
        setActivateProveedor,
    };
};
