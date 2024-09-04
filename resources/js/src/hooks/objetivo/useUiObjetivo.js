import { useDispatch, useSelector } from "react-redux";
import {
    onOpenModalObjetivo,
    onOpenModalStatusObjetivo,
} from "../../store/objetivo/uiObjetivoSlice";

export const useUiObjetivo = () => {
    const { isOpenModalObjetivo, isOpenModalStatusObjetivo } = useSelector(
        (state) => state.uiObjetivo
    );

    const dispatch = useDispatch();

    const modalActionObjetivo = (behavior) => {
        dispatch(onOpenModalObjetivo(behavior));
    };

    const modalStatusObjetivo = (behavior) => {
        dispatch(onOpenModalStatusObjetivo(behavior));
    };

    return {
        isOpenModalObjetivo,
        isOpenModalStatusObjetivo,

        modalActionObjetivo,
        modalStatusObjetivo
    };
};
