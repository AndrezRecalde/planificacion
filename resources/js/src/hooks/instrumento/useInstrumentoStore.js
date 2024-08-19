import { useDispatch, useSelector } from "react-redux";
import { useErrorException } from "../../hooks";
import {
    onClearInstrumentos,
    onDeleteInstrumento,
    onLoadErrores,
    onLoading,
    onLoadInstrumentos,
    onLoadMessage,
    onSetActivateInstrumento,
} from "../../store/instrumento/instrumentoSlice";
import planningApi from "../../api/planningApi";
import { API_URL_ROUTES, PREFIX_ROUTES } from "../../helpers";

export const useInstrumentoStore = () => {
    const { isLoading, instrumentos, activateInstrumento, message, errores } =
        useSelector((state) => state.instrumento);

    const { ExceptionMessageError } = useErrorException(onLoadErrores);

    const dispatch = useDispatch();

    const startLoadInstrumentos = async ({ fecha_inicio }) => {
        try {
            dispatch(onLoading(true));
            const { data } = await planningApi.post(
                PREFIX_ROUTES.PLANIFICACION + API_URL_ROUTES.GET_INSTRUMENTOS,
                {
                    fecha_inicio,
                }
            );
            const { instrumentos } = data;
            dispatch(onLoadInstrumentos(instrumentos));
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startAddInstrumento = async (instrumento) => {
        try {
            if (instrumento.id) {
                const { data } = await planningApi.post(
                    `${
                        PREFIX_ROUTES.PLANIFICACION +
                        API_URL_ROUTES.UPDATE_INSTRUMENTO
                    }/${instrumento.id}`,
                    instrumento,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                startLoadInstrumentos({});
                dispatch(onLoadMessage(data));
                setTimeout(() => {
                    dispatch(onLoadMessage(undefined));
                }, 40);
                return;
            }
            const { data } = await planningApi.post(
                PREFIX_ROUTES.PLANIFICACION + API_URL_ROUTES.STORE_INSTRUMENTO,
                instrumento,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            startLoadInstrumentos({});
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startDeleteInstrumento = async (instrumento) => {
        try {
            const { data } = await planningApi.delete(
                `${
                    PREFIX_ROUTES.PLANIFICACION +
                    API_URL_ROUTES.DELETE_INSTRUMENTO
                }/${instrumento.id}`
            );
            dispatch(onDeleteInstrumento());
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startClearInstrumentos = () => {
        dispatch(onClearInstrumentos());
    }

    const setActivateInstrumento = (instrumento) => {
        dispatch(onSetActivateInstrumento(instrumento));
    }

    return {
        isLoading,
        instrumentos,
        activateInstrumento,
        message,
        errores,

        startLoadInstrumentos,
        startAddInstrumento,
        startDeleteInstrumento,
        startClearInstrumentos,
        setActivateInstrumento
    };
};
