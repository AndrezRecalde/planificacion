import { useDispatch, useSelector } from "react-redux";
import {
    onOpenModalEarticulacion,
    onOpenModalStatusEarticulacion,
} from "../../store/earticulacion/uiEarticulacionSlice";

export const useUiEarticulacion = () => {
    const { isOpenModalEarticulacion, isOpenModalStatusEarticulacion } =
        useSelector((state) => state.uiEarticulacion);
    const dispatch = useDispatch();

    const modalActionEarticulacion = (behavior) => {
        dispatch(onOpenModalEarticulacion(behavior));
    };

    const modalActionStatusEarticulacion = (behavior) => {
        dispatch(onOpenModalStatusEarticulacion(behavior));
    };

    return {
        isOpenModalEarticulacion,
        isOpenModalStatusEarticulacion,
        modalActionEarticulacion,
        modalActionStatusEarticulacion,
    };
};
