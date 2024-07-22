import { useDispatch, useSelector } from "react-redux";
import {
    onOpenModalCategoriapdot,
    onOpenModalStatusCategoriapdot,
} from "../../store/categoriapdot/uiCategoriapdotSlice";

export const useUiCategoriapdot = () => {
    const { isOpenModalCategoriapdot, isOpenModalStatusCategoriapdot } =
        useSelector((state) => state.uiCategoriapdot);

    const dispatch = useDispatch();

    const modalActionCategoriapdot = (behavior) => {
        dispatch(onOpenModalCategoriapdot(behavior));
    };

    const modalActionStatusCategoriapdot = (behavior) => {
        dispatch(onOpenModalStatusCategoriapdot(behavior));
    };

    return {
        isOpenModalCategoriapdot,
        isOpenModalStatusCategoriapdot,

        modalActionCategoriapdot,
        modalActionStatusCategoriapdot,
    };
};
