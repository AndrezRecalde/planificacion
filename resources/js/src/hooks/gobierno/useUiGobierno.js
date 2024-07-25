import { useDispatch, useSelector } from "react-redux";
import {
    onOpenModalGobierno,
    onOpenModalStatusGobierno,
} from "../../store/gobierno/uiGobiernoSlice";

export const useUiGobierno = () => {
    const { isOpenModalGobierno, isOpenModalStatusGobierno } = useSelector(
        (state) => state.uiGobierno
    );
    const dispatch = useDispatch();

    const modalActionGobierno = (behavior) => {
        dispatch(onOpenModalGobierno(behavior));
    };

    const modalActionStatusGobierno = (behavior) => {
        dispatch(onOpenModalStatusGobierno(behavior));
    };

    return {
        isOpenModalGobierno,
        isOpenModalStatusGobierno,

        modalActionGobierno,
        modalActionStatusGobierno
    };
};
