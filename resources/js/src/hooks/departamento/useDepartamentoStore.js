import { useDispatch, useSelector } from "react-redux";
import { useErrorException } from "../../hooks";
import {
    onAddDepartamento,
    onClearDepartamentos,
    onDeleteDepartamento,
    onLoadDepartamentos,
    onLoadErrores,
    onLoading,
    onLoadMessage,
    onSetActivateDepartamento,
    onUpdateDepartamento,
} from "../../store/departamento/departamentoSlice";
import { API_URL_ROUTES, PREFIX_ROUTES } from "../../helpers";
import planningApi from "../../api/planningApi";

export const useDepartamentoStore = () => {
    const { isLoading, departamentos, activateDepartamento, message, errores } =
        useSelector((state) => state.departamento);

    const { ExceptionMessageError } = useErrorException(onLoadErrores);

    const dispatch = useDispatch();

    const startLoadDepartamentos = async ({
        institucion_id,
        acronimo_id = null,
    }) => {
        try {
            dispatch(onLoading());
            const { data } = await planningApi.post(
                PREFIX_ROUTES.PLANIFICACION + API_URL_ROUTES.GET_DEPARTAMENTOS,
                {
                    institucion_id,
                    acronimo_id,
                }
            );
            const { departamentos } = data;
            dispatch(onLoadDepartamentos(departamentos));
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startAddDepartamento = async (departamento) => {
        try {
            if (departamento.id) {
                const { data } = await planningApi.put(
                    `${
                        PREFIX_ROUTES.ADMIN + API_URL_ROUTES.UPDATE_DEPARTAMENT0
                    }/${departamento.id}`,
                    departamento
                );
                //dispatch(onUpdateDepartamento({ ...departamento }));
                startLoadDepartamentos({});
                dispatch(onLoadMessage(data));
                setTimeout(() => {
                    dispatch(onLoadMessage(undefined));
                }, 40);
                return;
            }
            const { data } = await planningApi.post(
                PREFIX_ROUTES.ADMIN + API_URL_ROUTES.STORE_DEPARTAMENT0,
                departamento
            );
            //dispatch(onAddDepartamento({ ...departamento }));
            startLoadDepartamentos({});
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startUpdateStatusDepartamento = async (departamento) => {
        try {
            const { data } = await planningApi.put(
                `${
                    PREFIX_ROUTES.PLANIFICACION +
                    API_URL_ROUTES.UPDATE_STATUS_DEPARTAMENT0
                }/${departamento.id}`,
                departamento
            );
            //dispatch(onUpdateDepartamento({ ...departamento }));
            startLoadDepartamentos({});
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startDeleteDepartamento = async (departamento) => {
        try {
            const { data } = await planningApi.delete(
                `${PREFIX_ROUTES.ADMIN + API_URL_ROUTES.DELETE_DEPARTAMENT0}/${
                    departamento.id
                }`
            );
            dispatch(onDeleteDepartamento());
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startClearDepartamentos = () => {
        dispatch(onClearDepartamentos());
    };

    const setActivateDepartamento = (departamento) => {
        dispatch(onSetActivateDepartamento(departamento));
    };

    return {
        isLoading,
        departamentos,
        activateDepartamento,
        message,
        errores,

        startLoadDepartamentos,
        startAddDepartamento,
        startUpdateStatusDepartamento,
        startDeleteDepartamento,
        startClearDepartamentos,
        setActivateDepartamento,
    };
};
