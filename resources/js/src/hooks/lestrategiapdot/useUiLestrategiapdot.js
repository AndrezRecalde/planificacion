import { useDispatch, useSelector } from "react-redux";
import { onOpenModalLestrategia, onOpenModalStatusLestrategia } from "../../store/lestrategia/uiLestrategiapdotSlice";

export const useUiLestrategiapdot = () => {
    const { isOpenModalLestrategia, isOpenModalStatusLestrategia } = useSelector(
        (state) => state.uiLestrategiapdot
    );

    const dispatch = useDispatch();

    const modalActionLestrategiapdot = (behavior) => {
        dispatch(onOpenModalLestrategia(behavior));
    };

    const modalActionStatusLestrategiapdot = (behavior) => {
        dispatch(onOpenModalStatusLestrategia(behavior));
    }

    return {
        isOpenModalLestrategia,
        isOpenModalStatusLestrategia,

        modalActionLestrategiapdot,
        modalActionStatusLestrategiapdot
    };
};
