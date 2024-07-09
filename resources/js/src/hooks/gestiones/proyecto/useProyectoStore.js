import { useDispatch, useSelector } from "react-redux";
import { useErrorException } from "../../../hooks";
import {
    onAddProyecto,
    onClearProyectos,
    onDeleteProyecto,
    onLoadErrores,
    onLoading,
    onLoadMessage,
    onLoadProyectos,
    onSetActivateProyecto,
    onUpdateProyecto,
} from "../../../store/proyecto/proyectoSlice";
import { API_URL_ROUTES, PREFIX_ROUTES } from "../../../helpers";
import planningApi from "../../../api/planningApi";


export const useProyectoStore = () => {
    const { isLoading, proyectos, activateProyecto, message, errores } =
        useSelector((state) => state.proyecto);

    const { ExceptionMessageError } = useErrorException(onLoadErrores);

    const dispatch = useDispatch();

    const startLoadProyectosForPrograma = async (programa_id) => {
        try {
            dispatch(onLoading(true));
            const { data } = await planningApi.post(
                PREFIX_ROUTES.GENERAL + API_URL_ROUTES.GET_PROYECTOS,
                { programa_id }
            );
            const { proyectos } = data;
            dispatch(onLoadProyectos(proyectos));
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startAddProyecto = async (proyecto) => {
        try {
            if (proyecto.id) {
                const { data } = await planningApi.put(
                    `${PREFIX_ROUTES.GENERAL + API_URL_ROUTES.UPDATE_PROYECTO}/
                    ${proyecto.id}`,
                    proyecto
                );
                dispatch(onUpdateProyecto({ ...proyecto }));
                dispatch(onLoadMessage(data));
                setTimeout(() => {
                    dispatch(onLoadMessage(undefined));
                }, 40);
                return;
            }
            const { data } = await planningApi.post(
                PREFIX_ROUTES.GENERAL + API_URL_ROUTES.STORE_PROYECTO,
                proyecto
            );
            dispatch(onAddProyecto({ ...proyecto }));
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startDelete = async (proyecto) => {
        try {
            const { data } = await planningApi.delete(
                `${PREFIX_ROUTES.ADMIN + API_URL_ROUTES.DELETE_PROYECTO}/${
                    proyecto.id
                }`
            );
            dispatch(onDeleteProyecto());
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startClearProyectos = () => {
        dispatch(onClearProyectos());
    };

    const setActivateProyecto = (proyecto) => {
        dispatch(onSetActivateProyecto(proyecto));
    };

    return {
        isLoading,
        proyectos,
        activateProyecto,
        message,
        errores,

        startLoadProyectosForPrograma,
        startAddProyecto,
        startDelete,
        startClearProyectos,
        setActivateProyecto,
    };
};
