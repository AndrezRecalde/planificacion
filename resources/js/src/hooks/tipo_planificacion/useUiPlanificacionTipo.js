import { useDispatch, useSelector } from "react-redux";
import { onOpenModalPlanificacionTipo, onOpenModalStatusPlanificacionStatus } from "../../store/planificaciontipo/uiPlanificacionTipoSlice";

export const useUiPlanificacionTipo = () => {
    const { isOpenModalPlanificacionTipo, isOpenModalStatusPlanificacionTipo } =
        useSelector(state => state.uiPlanificacionTipo);

    const dispatch = useDispatch();

    const modalActionPlanificacionTipo = (behavior) => {
        dispatch(onOpenModalPlanificacionTipo(behavior));
    }

    const modalActionStatusPlanificacionTipo = (behavior) => {
        dispatch(onOpenModalStatusPlanificacionStatus(behavior));
    }

    return {
        isOpenModalPlanificacionTipo,
        isOpenModalStatusPlanificacionTipo,

        modalActionPlanificacionTipo,
        modalActionStatusPlanificacionTipo
    };
};
