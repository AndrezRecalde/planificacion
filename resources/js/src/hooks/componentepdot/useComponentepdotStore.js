import { useDispatch, useSelector } from "react-redux";
import {
    onClearComponentespdot,
    onDeleteComponentepdot,
    onLoadComponentespdot,
    onLoadErrores,
    onLoading,
    onLoadMessage,
    onSetActivateComponentepdot,
} from "../../store/componentepdot/componentepdotSlice";
import { useErrorException } from "../../hooks";
import planningApi from "../../api/planningApi";
import { API_URL_ROUTES, PREFIX_ROUTES } from "../../helpers";

export const useComponentepdotStore = () => {
    const {
        isLoading,
        componentespdot,
        activateComponentepdot,
        message,
        errores,
    } = useSelector((state) => state.componentepdot);
    const { ExceptionMessageError } = useErrorException(onLoadErrores);

    const dispatch = useDispatch();

    const startLoadComponentespdot = async (activo = null) => {
        try {
            dispatch(onLoading(true));
            const { data } = await planningApi.get(
                PREFIX_ROUTES.PLANIFICACION +
                    API_URL_ROUTES.GET_COMPONENTESPDOT,
                {
                    activo,
                }
            );
            const { componentespdot } = data;
            dispatch(onLoadComponentespdot(componentespdot));
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startAddComponentepdot = async (componentepdot) => {
        try {
            if (componentepdot.id) {
                const { data } = await planningApi.put(
                    `${
                        PREFIX_ROUTES.PLANIFICACION +
                        API_URL_ROUTES.UPDATE_COMPONENTESPDOT
                    }/${componentepdot.id}`,
                    componentepdot
                );
                startLoadComponentespdot();
                dispatch(onLoadMessage(data));
                setTimeout(() => {
                    dispatch(onLoadMessage(undefined));
                }, 40);
                return;
            }
            const { data } = await planningApi.post(
                PREFIX_ROUTES.PLANIFICACION +
                    API_URL_ROUTES.STORE_COMPONENTEPDOT,
                componentepdot
            );
            startLoadComponentespdot();
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startUpdateStatusComponentepdot = async (componentepdot) => {
        try {
            const { data } = await planningApi.put(
                `${
                    PREFIX_ROUTES.PLANIFICACION +
                    API_URL_ROUTES.UPDATE_STATUS_COMPONENTESPDOT
                }/${componentepdot.id}`,
                componentepdot
            );
            startLoadComponentespdot();
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startDeleteComponentepdot = async (componentepdot) => {
        try {
            const { data } = await planningApi.delete(
                `${
                    PREFIX_ROUTES.ADMIN + API_URL_ROUTES.DELETE_COMPONENTEPDOT
                }/${componentepdot.id}`
            );
            dispatch(onDeleteComponentepdot());
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startClearComponentepdot = () => {
        dispatch(onClearComponentespdot());
    };

    const setActivateComponentepdot = (componentepdot) => {
        dispatch(onSetActivateComponentepdot(componentepdot));
    };

    return {
        isLoading,
        componentespdot,
        activateComponentepdot,
        message,
        errores,

        startLoadComponentespdot,
        startAddComponentepdot,
        startUpdateStatusComponentepdot,
        startDeleteComponentepdot,
        startClearComponentepdot,
        setActivateComponentepdot
    };
};
