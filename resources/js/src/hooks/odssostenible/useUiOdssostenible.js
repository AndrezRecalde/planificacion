import { useDispatch, useSelector } from "react-redux";
import { onOpenModalOdssostenible, onOpenModalStatusOdssostenible } from "../../store/odssostenible/uiOdssostenibleSlice";

export const useUiOdssostenible = () => {

    const { isOpenModalOdssostenible, isOpenModalStatusOdssostenible } =
        useSelector((state) => state.uiOdssostenible);
    const dispatch = useDispatch();

    const modalActionOdssostenible = (behavior) => {
        dispatch(onOpenModalOdssostenible(behavior));
    }

    const modalActionStatusOdssostenible = (behavior) => {
        dispatch(onOpenModalStatusOdssostenible(behavior));
    }

    return {
        isOpenModalOdssostenible,
        isOpenModalStatusOdssostenible,

        modalActionOdssostenible,
        modalActionStatusOdssostenible
    };
};
