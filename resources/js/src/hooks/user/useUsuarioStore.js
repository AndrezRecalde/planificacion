import { useDispatch, useSelector } from "react-redux";
import { useErrorException } from "../../hooks";
import {
    onClearUsuario,
    onDeleteUsuario,
    onLoadErrores,
    onLoading,
    onLoadMessage,
    onLoadUsers,
    onSetActivateUsuario,
} from "../../store/user/userSlice";
import planningApi from "../../api/planningApi";
import { API_URL_ROUTES, PREFIX_ROUTES } from "../../helpers";

export const useUsuarioStore = () => {
    const { isLoading, usuarios, activateUsuario, message, errores } =
        useSelector((state) => state.usuario);

    const { ExceptionMessageError } = useErrorException(onLoadErrores);

    const dispatch = useDispatch();

    const startLoadUsuarios = async ({ activo = null }) => {
        try {
            dispatch(onLoading(true));
            const { data } = await planningApi.post(
                PREFIX_ROUTES.PLANIFICACION + API_URL_ROUTES.GET_USUARIOS,
                {
                    activo,
                }
            );
            const { usuarios } = data;
            dispatch(onLoadUsers(usuarios));
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startAddUsuario = async (usuario) => {
        try {
            if (usuario.id) {
                const { data } = await planningApi.put(
                    `${
                        PREFIX_ROUTES.PLANIFICACION +
                        API_URL_ROUTES.UPDATE_USUARIO
                    }/${usuario.id}`,
                    usuario
                );
                startLoadUsuarios({});
                dispatch(onLoadMessage(data));
                setTimeout(() => {
                    dispatch(onLoadMessage(undefined));
                }, 40);
                return;
            }
            const { data } = await planningApi.post(
                PREFIX_ROUTES.ADMIN + API_URL_ROUTES.STORE_USUARIO,
                usuario
            );
            startLoadUsuarios({});
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startDeleteUsuario = async (usuario) => {
        try {
            const { data } = await planningApi.delete(
                `${PREFIX_ROUTES.ADMIN + API_URL_ROUTES.DELETE_USUARIO}/${
                    usuario.id
                }`
            );
            dispatch(onDeleteUsuario());
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startClearUsuarios = () => {
        dispatch(onClearUsuario());
    }

    const setActivateUsuario = (usuario) => {
        dispatch(onSetActivateUsuario(usuario));
    }

    return {
        isLoading,
        usuarios,
        activateUsuario,
        message,
        errores,

        startLoadUsuarios,
        startAddUsuario,
        startDeleteUsuario,
        startClearUsuarios,
        setActivateUsuario
    };
};
