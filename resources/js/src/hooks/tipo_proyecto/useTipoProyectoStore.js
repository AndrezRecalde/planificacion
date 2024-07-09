import { useDispatch, useSelector } from "react-redux";
import { useErrorException } from "../../hooks";
import {
    onAddTipoProyecto,
    onClearTipoProyecto,
    onDeleteTipoProyecto,
    onLoadErrores,
    onLoading,
    onLoadMessage,
    onLoadTipoProyectos,
    onSetActivateTipoProyecto,
    onUpdateTipoProyecto,
} from "../../store/tipo_proyecto/tipoProyectoSlice";
import { API_URL_ROUTES, PREFIX_ROUTES } from "../../helpers";
import planningApi from "../../api/planningApi";

export const useTipoProyectoStore = () => {
    const { isLoading, tipoProyectos, activateTipoProyecto, message, errores } =
        useSelector((state) => state.tipoProyecto);

    const { ExceptionMessageError } = useErrorException(onLoadErrores);

    const dispatch = useDispatch();

    const startLoadTiposProyectos = async () => {
        try {
            dispatch(onLoading());
            const { data } = await planningApi.get(
                PREFIX_ROUTES.PLANIFICACION + API_URL_ROUTES.GET_TIPO_PROYECTOS
            );
            const { tipos } = data;
            dispatch(onLoadTipoProyectos(tipos));
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startAddTipoProyecto = async (tipoproyecto) => {
        try {
            dispatch(onLoading(true));
            if (tipoproyecto.id) {
                const { data } = await planningApi.put(
                    `${
                        PREFIX_ROUTES.PLANIFICACION +
                        API_URL_ROUTES.UPDATE_TIPO_PROYECTO
                    }/${tipoproyecto.id}`,
                    tipoproyecto
                );
                dispatch(onUpdateTipoProyecto({ ...tipoproyecto }));
                dispatch(onLoadMessage(data));
                setTimeout(() => {
                    dispatch(onLoadMessage(undefined));
                }, 40);
                return;
            }
            const { data } = await planningApi.post(
                PREFIX_ROUTES.PLANIFICACION +
                    API_URL_ROUTES.STORE_TIPO_PROYECTO,
                tipoproyecto
            );
            dispatch(onAddTipoProyecto({ ...tipoproyecto }));
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startDeleteTipoProyecto = async (tipoproyecto) => {
        try {
            const { data } = await planningApi.delete(
                `${PREFIX_ROUTES.ADMIN + API_URL_ROUTES.DELETE_TIPO_PROYECTO}/${
                    tipoproyecto.id
                }`
            );
            dispatch(onDeleteTipoProyecto());
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startClearTipoProyecto = () => {
        dispatch(onClearTipoProyecto());
    };

    const setActivateTipoProyecto = (tipoproyecto) => {
        dispatch(onSetActivateTipoProyecto(tipoproyecto));
    };

    return {
        isLoading,
        tipoProyectos,
        activateTipoProyecto,
        message,
        errores,

        startLoadTiposProyectos,
        startAddTipoProyecto,
        startDeleteTipoProyecto,
        startClearTipoProyecto,
        setActivateTipoProyecto,
    };
};
