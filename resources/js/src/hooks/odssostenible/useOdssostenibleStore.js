import { useDispatch, useSelector } from "react-redux";
import { useErrorException } from "../../hooks";
import {
    onLoadErrores,
    onLoading,
    onLoadMessage,
    onLoadOdssostenibles,
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
            const { data } = await planningApi.post();
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
                const { data } = await planningApi.put(
                    `${
                        PREFIX_ROUTES.PLANIFICACION + API_URL_ROUTES.UPDATE_ODS
                    }/${odssostenible.id}`,
                    odssostenible
                );
                startLoadOdssostenibles({});
                dispatch(onLoadMessage(data));
                setTimeout(() => {
                    dispatch(onLoadMessage(undefined));
                }, 40);
                return;
            }
            const { data } = await planningApi.post(
                PREFIX_ROUTES.PLANIFICACION + API_URL_ROUTES.GET_ODS,
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

    return {
        isLoading,
        odssostenibles,
        activateOdssostenible,
        message,
        errores,

        startLoadOdssostenibles,
    };
};
