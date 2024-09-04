import { useDispatch, useSelector } from "react-redux";
import { useErrorException } from "../../hooks";
import {
    onClearObjetivos,
    onDeleteObjetivo,
    onLoadErrores,
    onLoading,
    onLoadMessage,
    onLoadObjetivos,
    onSetActivateObjetivo,
} from "../../store/objetivo/objetivoSlice";
import planningApi from "../../api/planningApi";
import { API_URL_ROUTES, PREFIX_ROUTES } from "../../helpers";

export const useObjetivoStore = () => {
    const { isLoading, objetivos, activateObjetivo, message, errores } =
        useSelector((state) => state.objetivo);

    const { ExceptionMessageError } = useErrorException(onLoadErrores);

    const dispatch = useDispatch();

    const startLoadObjetivos = async ({
        departamento_id = null,
        lestrategiapdot_id = null,
        competenciapdot_id = null,
        anio_cumplimiento = null,
    }) => {
        try {
            dispatch(onLoading(true));
            const { data } = await planningApi.post(
                PREFIX_ROUTES.PLANIFICACION + API_URL_ROUTES.GET_OBJETIVOS,
                {
                    departamento_id,
                    lestrategiapdot_id,
                    competenciapdot_id,
                    anio_cumplimiento,
                }
            );
            const { objetivos } = data;
            dispatch(onLoadObjetivos(objetivos));
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startAddObjetivo = async (objetivo) => {
        try {
            dispatch(onLoading(true));
            if (objetivo.id) {
                const { data } = await planningApi.put(
                    `${
                        PREFIX_ROUTES.PLANIFICACION +
                        API_URL_ROUTES.UPDATE_OBJETIVO
                    }/${objetivo.id}`
                );
                startLoadObjetivos({});
                dispatch(onLoadMessage(data));
                setTimeout(() => {
                    dispatch(onLoadMessage(undefined));
                }, 40);
                return;
            }
            const { data } = await planningApi.post(
                PREFIX_ROUTES.PLANIFICACION + API_URL_ROUTES.STORE_OBJETIVO,
                objetivo
            );
            startLoadObjetivos({});
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startUpdateStatusObjetivo = async (objetivo) => {
        try {
            const { data } = await planningApi.put(
                `${
                    PREFIX_ROUTES.PLANIFICACION +
                    API_URL_ROUTES.UPDATE_STATUS_OBJETIVO
                }/${metapdot.id}`,
                objetivo
            );
            startLoadObjetivos({});
            setActivateObjetivo(null);
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startDeleteObjetivo = async (objetivo) => {
        try {
            dispatch(onLoading(true));
            const { data } = await planningApi.delete(
                `${PREFIX_ROUTES.ADMIN + API_URL_ROUTES.DELETE_OBJETIVO}/${
                    objetivo.id
                }`
            );
            dispatch(onDeleteObjetivo());
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startClearObjetivos = () => {
        dispatch(onClearObjetivos());
    }

    const setActivateObjetivo = (objetivo) => {
        dispatch(onSetActivateObjetivo(objetivo));
    }

    return {
        isLoading,
        objetivos,
        activateObjetivo,
        message,
        errores,

        startLoadObjetivos,
        startAddObjetivo,
        startUpdateStatusObjetivo,
        startDeleteObjetivo,
        startClearObjetivos,
        setActivateObjetivo
    };
};
