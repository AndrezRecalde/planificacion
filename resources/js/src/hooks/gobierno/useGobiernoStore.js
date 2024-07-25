import { useDispatch, useSelector } from "react-redux";
import { useErrorException } from "../../hooks";
import {
    onClearGobiernos,
    onDeleteGobierno,
    onLoadErrores,
    onLoadGobiernos,
    onLoading,
    onLoadMessage,
    onSetActivateGobierno,
} from "../../store/gobierno/gobiernoSlice";
import planningApi from "../../api/planningApi";
import { API_URL_ROUTES, PREFIX_ROUTES } from "../../helpers";

export const useGobiernoStore = () => {
    const { isLoading, gobiernos, activateGobierno, message, errores } =
        useSelector((state) => state.gobierno);

    const { ExceptionMessageError } = useErrorException(onLoadErrores);

    const dispatch = useDispatch();

    const startLoadGobiernos = async ({ activo }) => {
        try {
            dispatch(onLoading(true));
            const { data } = await planningApi.post(
                PREFIX_ROUTES.PLANIFICACION + API_URL_ROUTES.GET_GOBIERNOS,
                {
                    activo,
                }
            );
            const { gobiernos } = data;
            dispatch(onLoadGobiernos(gobiernos));
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startAddGobierno = async (gobierno) => {
        try {
            if (gobierno.id) {
                const { data } = await planningApi.put(
                    `${
                        PREFIX_ROUTES.PLANIFICACION +
                        API_URL_ROUTES.UPDATE_GOBIERNO
                    }/${gobierno.id}`,
                    gobierno
                );
                startLoadGobiernos({});
                dispatch(onLoadMessage(data));
                setTimeout(() => {
                    dispatch(onLoadMessage(undefined));
                }, 40);
                return;
            }
            const { data } = await planningApi.post(
                PREFIX_ROUTES.PLANIFICACION + API_URL_ROUTES.STORE_GOBIERNO,
                gobierno
            );
            startLoadGobiernos({});
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startUpdateStatusGobierno = async (gobierno) => {
        try {
            const { data } = await planningApi.put(
                `${
                    PREFIX_ROUTES.PLANIFICACION +
                    API_URL_ROUTES.UPDATE_STATUS_GOBIERNO
                }/${gobierno.id}`,
                gobierno
            );
            startLoadGobiernos({});
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startDeleteGobierno = async (gobierno) => {
        try {
            const { data } = await planningApi.delete(
                `${
                    PREFIX_ROUTES.PLANIFICACION + API_URL_ROUTES.DELETE_GOBIERNO
                }/${gobierno.id}`
            );
            dispatch(onDeleteGobierno());
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startClearGobiernos = () => {
        dispatch(onClearGobiernos());
    }

    const setActivateGobierno = (gobierno) => {
        dispatch(onSetActivateGobierno(gobierno));
    }

    return {
        isLoading,
        gobiernos,
        activateGobierno,
        message,
        errores,

        startLoadGobiernos,
        startAddGobierno,
        startUpdateStatusGobierno,
        startDeleteGobierno,
        startClearGobiernos,
        setActivateGobierno
    };
};
