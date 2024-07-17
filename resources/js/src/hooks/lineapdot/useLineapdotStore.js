import { useDispatch, useSelector } from "react-redux";
import { useErrorException } from "../error/useErrorException";
import {
    onAddLineapdot,
    onClearLineaspdot,
    onDeleteLineapdot,
    onLoadErrores,
    onLoading,
    onLoadLineaspdot,
    onLoadMessage,
    onSetActivateLineapdot,
    onUpdateLineapdot,
} from "../../store/lineas_pdot/lineapdotSlice";
import planningApi from "../../api/planningApi";
import { API_URL_ROUTES, PREFIX_ROUTES } from "../../helpers";

export const useLineapdotStore = () => {
    const { isLoading, lineaspdot, activeLineapdot, message, errores } =
        useSelector((state) => state.lineapdot);

    const { ExceptionMessageError } = useErrorException(onLoadErrores);

    const dispatch = useDispatch();

    const startLoadLineaspdot = async () => {
        try {
            dispatch(onLoading(true));
            const { data } = await planningApi.get(
                PREFIX_ROUTES.PLANIFICACION + API_URL_ROUTES.GET_LINEASPDOT
            );
            const { lineaspdot } = data;
            dispatch(onLoadLineaspdot(lineaspdot));
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startAddLineapdot = async (lineapdot) => {
        try {
            dispatch(onLoading(true));
            if (lineapdot.id) {
                const { data } = await planningApi.put(
                    `${
                        PREFIX_ROUTES.PLANIFICACION +
                        API_URL_ROUTES.UPDATE_LINEAPDOT
                    }/${lineapdot.id}`,
                    lineapdot
                );
                dispatch(onUpdateLineapdot({ ...lineapdot }));
                dispatch(onLoadMessage(data));
                setTimeout(() => {
                    dispatch(onLoadMessage(undefined));
                }, 40);
                return;
            }
            const { data } = await planningApi.post(
                PREFIX_ROUTES.PLANIFICACION + API_URL_ROUTES.STORE_LINEAPDOT,
                lineapdot
            );
            dispatch(onAddLineapdot({ ...lineapdot }));
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startDeleteLineapdot = async (lineapdot) => {
        try {
            dispatch(onLoading(true));
            const { data } = planningApi.delete(
                `${PREFIX_ROUTES.ADMIN + API_URL_ROUTES.DELETE_LINEAPDOT}/${
                    lineapdot.id
                }`
            );
            dispatch(onDeleteLineapdot());
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startClearLineaspdot = () => {
        dispatch(onClearLineaspdot());
    };

    const setActivateLineapdot = (lineapdot) => {
        dispatch(onSetActivateLineapdot(lineapdot));
    };

    return {
        isLoading,
        lineaspdot,
        activeLineapdot,
        message,
        errores,

        startLoadLineaspdot,
        startAddLineapdot,
        startDeleteLineapdot,
        startClearLineaspdot,
        setActivateLineapdot
    };
};
