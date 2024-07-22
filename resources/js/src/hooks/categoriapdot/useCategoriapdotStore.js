import { useDispatch, useSelector } from "react-redux";
import {
    onClearCategoriaspdot,
    onDeleteCategoriapdot,
    onLoadCategoriaspdot,
    onLoadErrores,
    onLoading,
    onLoadMessage,
    onSetCategoriapdot,
} from "../../store/categoriapdot/categoriapdotSlice";
import { useErrorException } from "../../hooks";
import planningApi from "../../api/planningApi";
import { API_URL_ROUTES, PREFIX_ROUTES } from "../../helpers";

export const useCategoriapdotStore = () => {
    const {
        isLoading,
        categoriaspdot,
        activateCategoriapdot,
        message,
        errores,
    } = useSelector((state) => state.categoriapdot);

    const { ExceptionMessageError } = useErrorException(onLoadErrores);

    const dispatch = useDispatch();

    const startLoadCategoriaspdot = async ({ activo = null }) => {
        try {
            dispatch(onLoading(true));
            const { data } = await planningApi.post(
                PREFIX_ROUTES.PLANIFICACION + API_URL_ROUTES.GET_CATEGORIASPDOT,
                {
                    activo,
                }
            );
            const { categorias } = data;
            dispatch(onLoadCategoriaspdot(categorias));
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startAddCategoriapdot = async (categoriapdot) => {
        try {
            if (categoriapdot.id) {
                const { data } = await planningApi.put(
                    `${
                        PREFIX_ROUTES.PLANIFICACION +
                        API_URL_ROUTES.UPDATE_CATEGORIAPDOT
                    }/${categoriapdot.id}`,
                    categoriapdot
                );
                startLoadCategoriaspdot({});
                dispatch(onLoadMessage(data));
                setTimeout(() => {
                    dispatch(onLoadMessage(undefined));
                }, 40);
                return;
            }
            const { data } = await planningApi.post(
                PREFIX_ROUTES.PLANIFICACION +
                    API_URL_ROUTES.STORE_CATEGORIAPDOT,
                categoriapdot
            );
            startLoadCategoriaspdot({});
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startUpdateStatusCategoriapdot = async (categoriapdot) => {
        try {
            const { data } = await planningApi.put(
                `${
                    PREFIX_ROUTES.PLANIFICACION +
                    API_URL_ROUTES.UPDATE_STATUS_CATEGORIAPDOT
                }/${categoriapdot.id}`,
                categoriapdot
            );
            startLoadCategoriaspdot({});
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startDeleteCategoriapdot = async (categoriapdot) => {
        try {
            const { data } = await planningApi.delete(
                `${PREFIX_ROUTES.ADMIN + API_URL_ROUTES.DELETE_CATEGORIAPDOT}/${
                    categoriapdot.id
                }`
            );
            dispatch(onDeleteCategoriapdot());
            dispatch(onLoadMessage(data));
            setTimeout(() => {
                dispatch(onLoadMessage(undefined));
            }, 40);
        } catch (error) {
            console.log(error);
            ExceptionMessageError(error);
        }
    };

    const startClearCategoriapdot = () => {
        dispatch(onClearCategoriaspdot());
    };

    const setActivateCategoriapdot = (categoriapdot) => {
        dispatch(onSetCategoriapdot(categoriapdot));
    };

    return {
        isLoading,
        categoriaspdot,
        activateCategoriapdot,
        message,
        errores,

        startLoadCategoriaspdot,
        startAddCategoriapdot,
        startUpdateStatusCategoriapdot,
        startDeleteCategoriapdot,
        startClearCategoriapdot,
        setActivateCategoriapdot,
    };
};
