import { useDispatch, useSelector } from "react-redux";
import { onOpenModalCompetenciapdot, onOpenModalStatusCompetenciapdot } from "../../store/competenciapdot/uiCompetenciapdotSlice";

export const useUiCompetenciapdot = () => {
    const { isOpenModalCompetenciapdot, isOpenModalStatusCompetenciapdot } =
        useSelector((state) => state.uiCompetenciapdot);

    const dispatch = useDispatch();

    const modalActionCompetenciapdot = (behavior) => {
        dispatch(onOpenModalCompetenciapdot(behavior));
    }

    const modalActionStatusCompetenciapdot = (behavior) => {
        dispatch(onOpenModalStatusCompetenciapdot(behavior));
    }

    return {
        isOpenModalCompetenciapdot,
        isOpenModalStatusCompetenciapdot,

        modalActionCompetenciapdot,
        modalActionStatusCompetenciapdot
    };
};
