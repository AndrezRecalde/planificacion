import { useDispatch, useSelector } from "react-redux";
import { useErrorException } from "../../hooks";
import {
    onClearMetapdot,
    onDeleteMetapdot,
    onLoadErrores,
    onLoading,
    onLoadMessage,
    onLoadMetaspdot,
    onSetActivateMetapdot,
} from "../../store/metapdot/metapdotSlice";
import planningApi from "../../api/planningApi";
import { API_URL_ROUTES, PREFIX_ROUTES } from "../../helpers";

export const useMetapdotStore = () => {
    const { isLoading, metaspdot, activateMetapdot, message, errores } =
        useSelector((state) => state.metapdot);

    const { ExceptionMessageError } = useErrorException(onLoadErrores);

    const dispatch = useDispatch();

    const startLoadMetaspdot = async ({ earticulacion_id = null }) => {
        try {
            dispatch(onLoading(true));
            const { data } = await planningApi.post(
                PREFIX_ROUTES.PLANIFICACION + API_URL_ROUTES.GET_METASPDOT, {
                    earticulacion_id
                }
            );
            const { metas } = data;
            dispatch(onLoadMetaspdot(metas));
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startAddMetapdot = async (metapdot) => {
        try {
            dispatch(onLoading(true));
            if (metapdot.id) {
                const { data } = await planningApi.put(
                    `${
                        PREFIX_ROUTES.PLANIFICACION +
                        API_URL_ROUTES.UPDATE_METAPDOT
                    }/${metapdot.id}`
                );
                startLoadMetaspdot({});
                dispatch(onLoadMessage(data));
                setTimeout(() => {
                    dispatch(onLoadMessage(undefined));
                }, 40);
                return;
            }
            const { data } = await planningApi.post(
                PREFIX_ROUTES.PLANIFICACION + API_URL_ROUTES.STORE_METAPDOT,
                metapdot
            );
            startLoadMetaspdot({});
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startUpdateStatusMetapdot = async (metapdot) => {
        try {
            const { data } = await planningApi.put(
                `${
                    PREFIX_ROUTES.PLANIFICACION +
                    API_URL_ROUTES.UPDATE_STATUS_METAPDOT
                }/${metapdot.id}`,
                metapdot
            );
            startLoadMetaspdot({});
            setActivateMetapdot(null);
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    }

    const startDeleteMetapdot = async (metapdot) => {
        try {
            dispatch(onLoading(true));
            const { data } = await planningApi.delete(
                `${PREFIX_ROUTES.ADMIN + API_URL_ROUTES.DELETE_METAPDOT}/${
                    metapdot.id
                }`
            );
            dispatch(onDeleteMetapdot());
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startClearMetapdot = () => {
        dispatch(onClearMetapdot());
    };

    const setActivateMetapdot = (metapdot) => {
        dispatch(onSetActivateMetapdot(metapdot));
    };

    return {
        isLoading,
        metaspdot,
        activateMetapdot,
        message,
        errores,

        startLoadMetaspdot,
        startAddMetapdot,
        startUpdateStatusMetapdot,
        startDeleteMetapdot,
        startClearMetapdot,
        setActivateMetapdot
    };
};
