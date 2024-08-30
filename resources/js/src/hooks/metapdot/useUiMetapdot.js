import { useDispatch, useSelector } from "react-redux";
import { onOpenModalMetapdot, onOpenModalStatusMetapdot } from "../../store/metapdot/uiMetapdotSlice";

export const useUiMetapdot = () => {
    const { isOpenModalMetapdot, isOpenModalStatusMetapdot } = useSelector(
        (state) => state.uiMetapdot
    );

    const dispatch = useDispatch();

    const modalActionMetapdot = (behavior) => {
        dispatch(onOpenModalMetapdot(behavior));
    }

    const modalActionStatusMetapdot = (behavior) => {
        dispatch(onOpenModalStatusMetapdot(behavior));
    }

    return {
        isOpenModalMetapdot,
        isOpenModalStatusMetapdot,

        modalActionMetapdot,
        modalActionStatusMetapdot
    };
};
