import { useDispatch, useSelector } from "react-redux";
import { useErrorException } from "../../hooks";
import {
    onAddLestrategiapdot,
    onClearLestrategiaspdot,
    onDeleteLEstrategiapdot,
    onLoadErrores,
    onLoading,
    onLoadLestrategiaspdot,
    onLoadMessage,
    onSetActivateLestrategiapdot,
    onUpdateLestrategiapdot,
} from "../../store/lestrategia/lestrategiapdotSlice";
import { API_URL_ROUTES, PREFIX_ROUTES } from "../../helpers";
import planningApi from "../../api/planningApi";

export const useLestrategiapdotStore = () => {
    const { isLoading, lestrategias, activateLestrategia, message, errores } =
        useSelector((state) => state.lestrategiapdot);

    const { ExceptionMessageError } = useErrorException(onLoadErrores);

    const dispatch = useDispatch();

    const startLoadLestrategiapdots = async () => {
        try {
            dispatch(onLoading(true));
            const { data } = await planningApi.get(
                PREFIX_ROUTES.PLANIFICACION +
                    API_URL_ROUTES.GET_LESTRATEGIAPDOTS
            );
            const { estrategias } = data;
            dispatch(onLoadLestrategiaspdot(estrategias));
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startAddLestrategiapdot = async (lestrategia) => {
        try {
            if (lestrategia.id) {
                const { data } = await planningApi.put(
                    `${
                        PREFIX_ROUTES.PLANIFICACION +
                        API_URL_ROUTES.UPDATE_LESTRATEGIAPDOTS
                    }/${lestrategia.id}`,
                    lestrategia
                );
                //dispatch(onUpdateLestrategiapdot({ ...lestrategia }));
                startLoadLestrategiapdots();
                dispatch(onLoadMessage(data));
                setTimeout(() => {
                    dispatch(onLoadMessage(undefined));
                }, 40);
                return;
            }
            const { data } = await planningApi.post(
                PREFIX_ROUTES.PLANIFICACION +
                    API_URL_ROUTES.STORE_LESTRATEGIAPDOTS,
                lestrategia
            );
            //dispatch(onAddLestrategiapdot({ ...lestrategia }));
            startLoadLestrategiapdots();
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
            return;
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startUpdateStatusLestrategiapdot = async (lestrategia) => {
        try {
            const { data } = await planningApi.put(
                `${
                    PREFIX_ROUTES.PLANIFICACION +
                    API_URL_ROUTES.UPDATE_STATUS_LESTRATEGIAPDOTS
                }/${lestrategia.id}`,
                lestrategia
            );
            //dispatch(onUpdateLestrategiapdot({ ...lestrategia }));
            startLoadLestrategiapdots();
            dispatch(onLoadMessage(data));
                setTimeout(() => {
                    dispatch(onLoadMessage(undefined));
                }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startDeleteLestrategiapdot = async (lestrategia) => {
        try {
            const { data } = await planningApi.delete(
                `${
                    PREFIX_ROUTES.ADMIN + API_URL_ROUTES.DELETE_LESTRATEGIAPDOTS
                }/${lestrategia.id}`
            );
            dispatch(onDeleteLEstrategiapdot());
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startClearLestrategiapdot = async () => {
        dispatch(onClearLestrategiaspdot());
    };

    const setActivateLestrategia = (lestrategia) => {
        dispatch(onSetActivateLestrategiapdot(lestrategia));
    };

    return {
        isLoading,
        lestrategias,
        activateLestrategia,
        message,
        errores,

        startLoadLestrategiapdots,
        startAddLestrategiapdot,
        startUpdateStatusLestrategiapdot,
        startDeleteLestrategiapdot,
        startClearLestrategiapdot,
        setActivateLestrategia,
    };
};
