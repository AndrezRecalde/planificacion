import { useDispatch, useSelector } from "react-redux";
import { useErrorException } from "../../hooks";
import {
    onClearProgramas,
    onDeletePrograma,
    onLoadErrores,
    onLoading,
    onLoadMessage,
    onLoadProgramas,
    onSetActivatePrograma,
} from "../../store/programa/programaSlice";
import planningApi from "../../api/planningApi";
import { API_URL_ROUTES, PREFIX_ROUTES } from "../../helpers";

export const useProgramaStore = () => {
    const { isLoading, programas, activatePrograma, message, errores } =
        useSelector((state) => state.programa);

    const { ExceptionMessageError } = useErrorException(onLoadErrores);

    const dispatch = useDispatch();

    const startLoadProgramas = async ({
        departamento_id = null,
        codigo_programa = null,
        planificaciontipo_id = null,
    }) => {
        try {
            dispatch(onLoading(true));
            const { data } = await planningApi.post(
                PREFIX_ROUTES.PLANIFICACION + API_URL_ROUTES.GET_PROGRAMAS,
                {
                    departamento_id,
                    codigo_programa,
                    planificaciontipo_id,
                }
            );
            const { programas } = data;
            //console.log(programas)
            dispatch(onLoadProgramas(programas));
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startAddPrograma = async (programa) => {
        try {
            dispatch(onLoading(true));
            if (programa.id) {
                const { data } = await planningApi.put(
                    `${
                        PREFIX_ROUTES.PLANIFICACION +
                        API_URL_ROUTES.UPDATE_PROGRAMA
                    }/${programa.id}`
                );
                startLoadProgramas({});
                dispatch(onLoadMessage(data));
                setTimeout(() => {
                    dispatch(onLoadMessage(undefined));
                }, 40);
                return;
            }
            const { data } = await planningApi.post(
                PREFIX_ROUTES.PLANIFICACION + API_URL_ROUTES.STORE_PROGRAMA,
                programa
            );
            startLoadProgramas({});
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startUpdateStatusPrograma = async (programa) => {
        try {
            const { data } = await planningApi.put(
                `${
                    PREFIX_ROUTES.PLANIFICACION +
                    API_URL_ROUTES.UPDATE_STATUS_PROGRAMA
                }/${programa.id}`,
                programa
            );
            startLoadProgramas({});
            setActivatePrograma(null);
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startDeletePrograma = async (programa) => {
        try {
            dispatch(onLoading(true));
            const { data } = await planningApi.delete(
                `${PREFIX_ROUTES.ADMIN + API_URL_ROUTES.DELETE_PROGRAMA}/${
                    programa.id
                }`
            );
            dispatch(onDeletePrograma());
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startClearProgramas = () => {
        dispatch(onClearProgramas());
    }

    const setActivatePrograma = (programa) => {
        dispatch(onSetActivatePrograma(programa));
    }

    return {
        isLoading,
        programas,
        activatePrograma,
        message,
        errores,

        startLoadProgramas,
        startAddPrograma,
        startUpdateStatusPrograma,
        startDeletePrograma,
        startClearProgramas,
        setActivatePrograma
    };
};
