import { useDispatch, useSelector } from "react-redux";
import { useErrorException } from "../../hooks";
import {
    onClearEjes,
    onDeleteEje,
    onLoadEjes,
    onLoadErrores,
    onLoading,
    onLoadMessage,
    onSetActivateEje,
} from "../../store/eje/ejeSlice";
import planningApi from "../../api/planningApi";
import { API_URL_ROUTES, PREFIX_ROUTES } from "../../helpers";

export const useEjeStore = () => {
    const { isLoading, ejes, activateEje, message, errores } = useSelector(
        (state) => state.eje
    );
    const { ExceptionMessageError } = useErrorException(onLoadErrores);

    const dispatch = useDispatch();

    const startLoadEjes = async () => {
        try {
            dispatch(onLoading(true));
            const { data } = await planningApi.get(
                PREFIX_ROUTES.PLANIFICACION + API_URL_ROUTES.GET_EJES
            );
            const { ejes } = data;
            dispatch(onLoadEjes(ejes));
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startAddEje = async (eje) => {
        try {
            if (eje.id) {
                const { data } = await planningApi.put(
                    `${
                        PREFIX_ROUTES.PLANIFICACION + API_URL_ROUTES.UPDATE_EJE
                    }/${eje.id}`,
                    eje
                );
                startLoadEjes();
                dispatch(onLoadMessage(data));
                setTimeout(() => {
                    dispatch(onLoadMessage(undefined));
                }, 40);
                return;
            }
            const { data } = await planningApi.post(
                PREFIX_ROUTES.PLANIFICACION + API_URL_ROUTES.STORE_EJE,
                eje
            );
            startLoadEjes();
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startDeleteEje = async (eje) => {
        try {
            const { data } = await planningApi.delete(
                `${PREFIX_ROUTES.ADMIN + API_URL_ROUTES.DELETE_EJE}/${eje.id}`
            );
            dispatch(onDeleteEje());
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startClearEjes = () => {
        dispatch(onClearEjes());
    };

    const setActivateEje = (eje) => {
        dispatch(onSetActivateEje(eje));
    };

    return {
        isLoading,
        ejes,
        activateEje,
        message,
        errores,

        startLoadEjes,
        startAddEje,
        startDeleteEje,
        startClearEjes,
        setActivateEje,
    };
};
