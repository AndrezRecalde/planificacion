import { useDispatch, useSelector } from "react-redux";
import { useErrorException } from "../../hooks";
import {
    onClearEarticulacion,
    onDeleteEarticulacion,
    onLoadEarticulaciones,
    onLoadErrores,
    onLoading,
    onLoadMessage,
    onSetActivateEarticulacion,
} from "../../store/earticulacion/earticulacionSlice";
import planningApi from "../../api/planningApi";
import { API_URL_ROUTES, PREFIX_ROUTES } from "../../helpers";

export const useEarticulacionStore = () => {
    const {
        isLoading,
        earticulaciones,
        activateEarticulacion,
        message,
        errores,
    } = useSelector((state) => state.earticulacion);
    const { ExceptionMessageError } = useErrorException(onLoadErrores);
    const dispatch = useDispatch();

    const startLoadEarticulaciones = async ({ activo = null }) => {
        try {
            dispatch(onLoading(true));
            const { data } = await planningApi.post(
                PREFIX_ROUTES.PLANIFICACION +
                    API_URL_ROUTES.GET_EARTICULACIONES,
                {
                    activo,
                }
            );
            const { articulaciones } = data;
            dispatch(onLoadEarticulaciones(articulaciones));
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startAddEarticulacion = async (earticulacion) => {
        try {
            if (earticulacion.id) {
                const { data } = await planningApi.put(
                    `${
                        PREFIX_ROUTES.PLANIFICACION +
                        API_URL_ROUTES.UPDATE_EARTICULACION
                    }/${earticulacion.id}`,
                    earticulacion
                );
                startLoadEarticulaciones({});
                dispatch(onLoadMessage(data));
                setTimeout(() => {
                    dispatch(onLoadMessage(undefined));
                }, 40);
                return;
            }
            const { data } = await planningApi.post(
                PREFIX_ROUTES.PLANIFICACION +
                    API_URL_ROUTES.STORE_EARTICULACION,
                earticulacion
            );
            startLoadEarticulaciones({});
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startUpdateStatusEarticulaciones = async (earticulacion) => {
        try {
            const { data } = await planningApi.put(
                `${
                    PREFIX_ROUTES.PLANIFICACION +
                    API_URL_ROUTES.UPDATE_STATUS_EARTICULACION
                }/${earticulacion.id}`,
                earticulacion
            );
            startLoadEarticulaciones({});
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startDeleteEarticulacion = async (earticulacion) => {
        try {
            const { data } = await planningApi.delete(
                `${PREFIX_ROUTES.ADMIN + API_URL_ROUTES.DELETE_EARTICULACION}/${
                    earticulacion.id
                }`
            );
            dispatch(onDeleteEarticulacion());
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startClearEarticulaciones = () => {
        dispatch(onClearEarticulacion());
    }

    const setActivateEarticulacion = (earticulacion) => {
        dispatch(onSetActivateEarticulacion(earticulacion));
    }

    return {
        isLoading,
        earticulaciones,
        activateEarticulacion,
        message,
        errores,

        startLoadEarticulaciones,
        startAddEarticulacion,
        startUpdateStatusEarticulaciones,
        startDeleteEarticulacion,
        startClearEarticulaciones,
        setActivateEarticulacion
    };
};
