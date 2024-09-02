import { useDispatch, useSelector } from "react-redux";
import {
    onOpenModalPrograma,
    onOpenModalStatusPrograma,
} from "../../store/programa/uiProgramaSlice";

export const useUiPrograma = () => {
    const { isOpenModalPrograma, isOpenModalStatusPrograma } = useSelector(
        (state) => state.uiPrograma
    );

    const dispatch = useDispatch();

    const modalActionPrograma = (behavior) => {
        dispatch(onOpenModalPrograma(behavior));
    };

    const modalActionStatusPrograma = (behavior) => {
        dispatch(onOpenModalStatusPrograma(behavior));
    };

    return {
        isOpenModalPrograma,
        isOpenModalStatusPrograma,

        modalActionPrograma,
        modalActionStatusPrograma,
    };
};
