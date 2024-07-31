import { useDispatch, useSelector } from "react-redux";
import { useErrorException } from "../../hooks";
import {
    onClearOPN,
    onDeleteOPN,
    onLoadErrores,
    onLoading,
    onLoadMessage,
    onLoadOPN,
    onSetActivateOPN,
} from "../../store/opn/opnSlice";
import planningApi from "../../api/planningApi";
import { API_URL_ROUTES, PREFIX_ROUTES } from "../../helpers";

export const useOPNStore = () => {
    const { isLoading, OPN, activateOPN, message, errores } = useSelector(
        (state) => state.opn
    );
    const { ExceptionMessageError } = useErrorException(onLoadErrores);

    const dispatch = useDispatch();

    const startLoadOPN = async ({ gobierno_id }) => {
        try {
            dispatch(onLoading(true));
            const { data } = await planningApi.post(
                PREFIX_ROUTES.PLANIFICACION + API_URL_ROUTES.GET_GOBIERNOS,
                {
                    gobierno_id,
                }
            );
            const { opns } = data;
            dispatch(onLoadOPN(opns));
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startLoadOPNProyectos = async ({ opn_id }) => {
        try {
            dispatch(onLoading(true));
            const { data } = await planningApi.post(
                PREFIX_ROUTES.PLANIFICACION +
                    API_URL_ROUTES.GET_GOBIERNO_PROYECTO,
                {
                    opn_id,
                }
            );
            const { opn_gobierno } = data;
            dispatch(onSetActivateOPN(opn_gobierno));
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startAddOPN = async (opn) => {
        try {
            dispatch(onLoading(true));
            if (opn.id) {
                const { data } = await planningApi.put(
                    `${
                        PREFIX_ROUTES.PLANIFICACION + API_URL_ROUTES.UPDATE_OPN
                    }/${opn.id}`,
                    opn
                );
                startLoadOPN({});
                dispatch(onLoadMessage(data));
                setTimeout(() => {
                    dispatch(onLoadMessage(undefined));
                }, 40);
                return;
            }
            const { data } = await planningApi.post(
                PREFIX_ROUTES.PLANIFICACION + API_URL_ROUTES.STORE_OPN,
                opn
            );
            startLoadOPN({});
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startDeleteOPN = async (opn) => {
        try {
            dispatch(onLoading(true));
            const { data } = await planningApi.delete(
                `${PREFIX_ROUTES.ADMIN + API_URL_ROUTES.DELETE_OPN}/${opn.id}`
            );
            dispatch(onDeleteOPN());
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startClearOPN = () => {
        dispatch(onClearOPN());
    };

    const setActivateOPN = (opn) => {
        dispatch(onSetActivateOPN(opn));
    };

    return {
        isLoading,
        OPN,
        activateOPN,
        message,
        errores,

        startLoadOPN,
        startLoadOPNProyectos,
        startAddOPN,
        startDeleteOPN,
        startClearOPN,
        setActivateOPN,
    };
};
