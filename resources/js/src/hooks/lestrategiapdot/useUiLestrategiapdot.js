import { useDispatch, useSelector } from "react-redux";
import { onOpenModalLestrategia } from "../../store/lestrategia/uiLestrategiapdotSlice";

export const useUiLestrategiapdot = () => {
    const { isOpenModalLestrategia } = useSelector(
        (state) => state.uiLestrategiapdot
    );

    const dispatch = useDispatch();

    const modalActionLestrategiapdot = (behavior) => {
        dispatch(onOpenModalLestrategia(behavior));
    };

    return {
        isOpenModalLestrategia,

        modalActionLestrategiapdot
    };
};
