import { useDispatch, useSelector } from "react-redux";
import {
    onClearCompetenciaspdot,
    onDeleteCompetenciapdot,
    onLoadCompetenciaspdot,
    onLoadErrores,
    onLoading,
    onLoadMessage,
    onSetActivateCompetenciapdot,
} from "../../store/competenciapdot/competenciapdotSlice";
import { useErrorException } from "../../hooks";
import planningApi from "../../api/planningApi";
import { API_URL_ROUTES, PREFIX_ROUTES } from "../../helpers";

export const useCompetenciapdotStore = () => {
    const {
        isLoading,
        competenciaspdot,
        activateCompetenciapdot,
        message,
        errores,
    } = useSelector((state) => state.competenciapdot);
    const { ExceptionMessageError } = useErrorException(onLoadErrores);
    const dispatch = useDispatch();

    const startLoadCompetenciaspdot = async ({
        lestrategiapdot_id = null,
        activo = null,
    }) => {
        try {
            dispatch(onLoading(true));
            const { data } = await planningApi.post(
                PREFIX_ROUTES.PLANIFICACION +
                    API_URL_ROUTES.GET_COMPETENCIASPDOT,
                {
                    lestrategiapdot_id,
                    activo,
                }
            );
            const { competencias } = data;
            dispatch(onLoadCompetenciaspdot(competencias));
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startAddCompetenciapdot = async (competenciapdot) => {
        try {
            if (competenciapdot.id) {
                const { data } = await planningApi.put(
                    `${
                        PREFIX_ROUTES.PLANIFICACION +
                        API_URL_ROUTES.UPDATE_COMPETENCIAPDOT
                    }/${competenciapdot.id}`,
                    competenciapdot
                );
                startLoadCompetenciaspdot({});
                dispatch(onLoadMessage(data));
                setTimeout(() => {
                    dispatch(onLoadMessage(undefined));
                }, 40);
                return;
            }
            const { data } = await planningApi.post(
                PREFIX_ROUTES.PLANIFICACION +
                    API_URL_ROUTES.STORE_COMPETENCIAPDOT,
                competenciapdot
            );
            startLoadCompetenciaspdot({});
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startUpdateStatusCompetenciapdot = async (competenciapdot) => {
        try {
            const { data } = await planningApi.put(
                `${
                    PREFIX_ROUTES.PLANIFICACION +
                    API_URL_ROUTES.UPDATE_STATUS_COMPETENCIAPDOT
                }/${competenciapdot.id}`,
                competenciapdot
            );
            startLoadCompetenciaspdot({});
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startDeleteCompetenciapdot = async (competenciapdot) => {
        try {
            const { data } = await planningApi.delete(
                `${
                    PREFIX_ROUTES.ADMIN + API_URL_ROUTES.DELETE_COMPETENCIAPDOT
                }/${competenciapdot.id}`
            );
            dispatch(onDeleteCompetenciapdot());
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startClearCompetenciapdot = () => {
        dispatch(onClearCompetenciaspdot());
    };

    const setActivateCompetenciapdot = (competenciapdot) => {
        dispatch(onSetActivateCompetenciapdot(competenciapdot));
    };

    return {
        isLoading,
        competenciaspdot,
        activateCompetenciapdot,
        message,
        errores,

        startLoadCompetenciaspdot,
        startAddCompetenciapdot,
        startUpdateStatusCompetenciapdot,
        startDeleteCompetenciapdot,
        startClearCompetenciapdot,
        setActivateCompetenciapdot,
    };
};
