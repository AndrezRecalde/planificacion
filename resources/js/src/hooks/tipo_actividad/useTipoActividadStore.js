import { useDispatch, useSelector } from "react-redux";
import { useErrorException } from "../../hooks";
import {
    onAddTipoActividad,
    onClearTipoActividades,
    onDeleteTipoActividad,
    onLoadErrores,
    onLoading,
    onLoadMessage,
    onLoadTipoActividades,
    onSetActivateTipoActividad,
    onUpdateTipoActividad,
} from "../../store/tipo_actividad/tipoActividadSlice";
import { API_URL_ROUTES, PREFIX_ROUTES } from "../../helpers";
import planningApi from "../../api/planningApi";


export const useTipoActividadStore = () => {
    const {
        isLoading,
        tipoActividades,
        activateTipoActividad,
        message,
        errores,
    } = useSelector((state) => state.tipoActividad);

    const { ExceptionMessageError } = useErrorException(onLoadErrores);

    const dispatch = useDispatch();

    const startLoadTipoActividades = async () => {
        try {
            dispatch(onLoading(true));
            const { data } = await planningApi.get(
                PREFIX_ROUTES.PLANIFICACION +
                    API_URL_ROUTES.GET_TIPO_ACTIVIDADES
            );
            const { tiposactividades } = data;
            dispatch(onLoadTipoActividades(tiposactividades));
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startAddTipoActividad = async (tipoactividad) => {
        try {
            if (tipoactividad.id) {
                const { data } = await planningApi.put(
                    `${
                        PREFIX_ROUTES.PLANIFICACION +
                        API_URL_ROUTES.UPDATE_TIPO_ACTIVIDADES
                    }/${tipoactividad.id}`,
                    tipoactividad
                );
                dispatch(onUpdateTipoActividad({ ...tipoactividad }));
                dispatch(onLoadMessage(data));
                setTimeout(() => {
                    dispatch(onLoadMessage(undefined));
                }, 40);
                return;
            }
            const { data } = await planningApi.post(
                PREFIX_ROUTES.PLANIFICACION +
                    API_URL_ROUTES.STORE_TIPO_ACTIVIDADES,
                tipoactividad
            );
            dispatch(onAddTipoActividad({ ...tipoactividad }));
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startDeleteTipoActividad = async (tipoactividad) => {
        try {
            const { data } = await planningApi.delete(
                `${
                    PREFIX_ROUTES.ADMIN + API_URL_ROUTES.DELETE_TIPO_ACTIVIDADES
                }/${tipoactividad.id}`
            );
            dispatch(onDeleteTipoActividad());
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startClearTipoActividad = () => {
        dispatch(onClearTipoActividades());
    };

    const setActivateTipoActividad = (tipoactividad) => {
        dispatch(onSetActivateTipoActividad(tipoactividad));
    };

    return {
        isLoading,
        tipoActividades,
        activateTipoActividad,
        message,
        errores,

        startLoadTipoActividades,
        startAddTipoActividad,
        startDeleteTipoActividad,
        startClearTipoActividad,
        setActivateTipoActividad
    };
};
