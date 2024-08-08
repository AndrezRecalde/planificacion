import { useDispatch, useSelector } from "react-redux";
import { useErrorException } from "../../hooks";
import {
    onClearOdssostenible,
    onDeleteOdssostenible,
    onLoadErrores,
    onLoading,
    onLoadMessage,
    onLoadOdssostenibles,
    onSetActivateOdssostenible,
} from "../../store/odssostenible/odssostenibleSlice";
import planningApi from "../../api/planningApi";
import { API_URL_ROUTES, PREFIX_ROUTES } from "../../helpers";

export const useOdssostenibleStore = () => {
    const {
        isLoading,
        odssostenibles,
        activateOdssostenible,
        message,
        errores,
    } = useSelector((state) => state.odssostenible);
    const { ExceptionMessageError } = useErrorException(onLoadErrores);
    const dispatch = useDispatch();

    const startLoadOdssostenibles = async ({ activo = null }) => {
        try {
            dispatch(onLoading(true));
            const { data } = await planningApi.post(
                PREFIX_ROUTES.PLANIFICACION + API_URL_ROUTES.GET_ODS,
                { activo }
            );
            const { odssostenibles } = data;
            dispatch(onLoadOdssostenibles(odssostenibles));
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startAddOdssostenible = async (odssostenible) => {
        try {
            if (odssostenible.id) {
                const { data } = await planningApi.post(
                    `${
                        PREFIX_ROUTES.PLANIFICACION + API_URL_ROUTES.UPDATE_ODS
                    }/${odssostenible.id}`,
                    odssostenible,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                startLoadOdssostenibles({});
                dispatch(onLoadMessage(data));
                setTimeout(() => {
                    dispatch(onLoadMessage(undefined));
                }, 40);
                return;
            }
            const { data } = await planningApi.post(
                PREFIX_ROUTES.PLANIFICACION + API_URL_ROUTES.STORE_ODS,
                odssostenible,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            startLoadOdssostenibles({});
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startUpdateStatusOdssostenible = async (odssostenible) => {
        try {
            const { data } = await planningApi.put(
                `${
                    PREFIX_ROUTES.PLANIFICACION +
                    API_URL_ROUTES.UPDATE_STATUS_ODS
                }/${odssostenible.id}`,
                odssostenible
            );
            startLoadOdssostenibles({});
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startDeleteOdssostenible = async (odssostenible) => {
        try {
            const { data } = await planningApi.delete(
                `${PREFIX_ROUTES.ADMIN + API_URL_ROUTES.DELETE_ODS}/${
                    odssostenible.id
                }`
            );
            dispatch(onDeleteOdssostenible());
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startClearOdssostenibles = () => {
        dispatch(onClearOdssostenible());
    };

    const setActivateOdssostenible = (odssostenible) => {
        dispatch(onSetActivateOdssostenible(odssostenible));
    };

    return {
        isLoading,
        odssostenibles,
        activateOdssostenible,
        message,
        errores,

        startLoadOdssostenibles,
        startAddOdssostenible,
        startUpdateStatusOdssostenible,
        startDeleteOdssostenible,
        startClearOdssostenibles,
        setActivateOdssostenible,
    };
};
