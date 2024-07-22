import { useDispatch, useSelector } from "react-redux";
import { onOpenModalComponentepdot, onOpenModalStatusComponentepdot } from "../../store/componentepdot/uiComponentepdotSlice";

export const useUiComponentepdot = () => {
    const { isOpenModalComponentepdot, isOpenModalStatusComponentepdot } =
        useSelector((state) => state.uiComponentepdot);

    const dispatch = useDispatch();

    const modalActionComponentepdot = (behavior) => {
        dispatch(onOpenModalComponentepdot(behavior));
    }

    const modalActionStatusComponentepdot = (behavior) => {
        dispatch(onOpenModalStatusComponentepdot(behavior));
    }

    return {
        isOpenModalComponentepdot,
        isOpenModalStatusComponentepdot,

        modalActionComponentepdot,
        modalActionStatusComponentepdot
    };
};
