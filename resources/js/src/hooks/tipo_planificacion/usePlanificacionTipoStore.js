import { useDispatch, useSelector } from "react-redux";
import { useErrorException } from "../../hooks";
import {
    onClearPlanificacionTipos,
    onDeletePlanificacionTipo,
    onLoadErrores,
    onLoading,
    onLoadMessage,
    onLoadPlanificacionTipos,
    onSetActivatePlanificacion,
} from "../../store/planificaciontipo/planificacionTipoSlice";
import planningApi from "../../api/planningApi";
import { API_URL_ROUTES, PREFIX_ROUTES } from "../../helpers";

export const usePlanificacionTipoStore = () => {
    const {
        isLoading,
        planificacionTipos,
        activatePlanificacionTipo,
        message,
        errores,
    } = useSelector(state => state.planificacionTipo);

    const { ExceptionMessageError } = useErrorException(onLoadErrores);

    const dispatch = useDispatch();

    const startLoadPlanificacionTipos = async () => {
        try {
            dispatch(onLoading(true));
            const { data } = await planningApi.get(
                PREFIX_ROUTES.PLANIFICACION +
                    API_URL_ROUTES.GET_PLANIFICACIONTIPOS
            );
            const { tipos } = data;
            dispatch(onLoadPlanificacionTipos(tipos));
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startAddPlanificacionTipo = async (planificacionTipo) => {
        try {
            dispatch(onLoading(true));
            if (planificacionTipo.id) {
                const { data } = await planningApi.put(
                    `${
                        PREFIX_ROUTES.PLANIFICACION +
                        API_URL_ROUTES.UPDATE_PLANIFICACIONTIPO
                    }/${planificacionTipo.id}`
                );
                startLoadPlanificacionTipos();
                dispatch(onLoadMessage(data));
                setTimeout(() => {
                    dispatch(onLoadMessage(undefined));
                }, 40);
                return;
            }
            const { data } = await planningApi.post(
                PREFIX_ROUTES.PLANIFICACION +
                    API_URL_ROUTES.STORE_PLANIFICACIONTIPO,
                planificacionTipo
            );
            startLoadPlanificacionTipos();
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startUpdateStatusPlanificacionTipo = async (planificacionTipo) => {
        try {
            const { data } = await planningApi.put(
                `${
                    PREFIX_ROUTES.PLANIFICACION +
                    API_URL_ROUTES.UPDATE_STATUS_PLANIFICACIONTIPO
                }/${planificacionTipo.id}`,
                planificacionTipo
            );
            startLoadPlanificacionTipos();
            setActivatePlanificacionTipo(null);
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startDeletePlanificacionTipo = async (planificacionTipo) => {
        try {
            dispatch(onLoading(true));
            const { data } = await planningApi.delete(
                `${PREFIX_ROUTES.ADMIN + API_URL_ROUTES.DELETE_PLANIFICACIONTIPO}/${
                    planificacionTipo.id
                }`
            );
            dispatch(onDeletePlanificacionTipo());
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startClearPlanificacionTipo = () => {
        dispatch(onClearPlanificacionTipos());
    }

    const setActivatePlanificacionTipo = (planificacionTipo) => {
        dispatch(onSetActivatePlanificacion(planificacionTipo));
    }

    return {
        isLoading,
        planificacionTipos,
        activatePlanificacionTipo,
        message,
        errores,

        startLoadPlanificacionTipos,
        startAddPlanificacionTipo,
        startUpdateStatusPlanificacionTipo,
        startDeletePlanificacionTipo,
        startClearPlanificacionTipo,
        setActivatePlanificacionTipo
    };
};
