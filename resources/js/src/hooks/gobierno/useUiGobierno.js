import { useDispatch, useSelector } from "react-redux";
import {
    onOpenModalGobierno,
    onOpenModalStatusGobierno,
    onOpenModalViewOPNGobierno,
} from "../../store/gobierno/uiGobiernoSlice";

export const useUiGobierno = () => {
    const {
        isOpenModalGobierno,
        isOpenModalStatusGobierno,
        isOpenModalViewOPNGobierno,
    } = useSelector((state) => state.uiGobierno);
    const dispatch = useDispatch();

    const modalActionGobierno = (behavior) => {
        dispatch(onOpenModalGobierno(behavior));
    };

    const modalActionStatusGobierno = (behavior) => {
        dispatch(onOpenModalStatusGobierno(behavior));
    };

    const modalActionViewOPNGobierno = (behavior) => {
        dispatch(onOpenModalViewOPNGobierno(behavior));
    };

    return {
        isOpenModalGobierno,
        isOpenModalStatusGobierno,
        isOpenModalViewOPNGobierno,

        modalActionGobierno,
        modalActionStatusGobierno,
        modalActionViewOPNGobierno,
    };
};
