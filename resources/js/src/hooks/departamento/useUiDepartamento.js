import { useDispatch, useSelector } from "react-redux";
import { onOpenModalAddDirectores, onOpenModalDepartamento } from "../../store/departamento/uiDepartamentoSlice";

export const useUiDepartamento = () => {
    const { isOpenModalDepartamento, isOpenModalAddDirectores } = useSelector(
        (state) => state.uiDepartamento
    );

    const dispatch = useDispatch();

    const modalActionDepartamento = (behavior) => {
        dispatch(onOpenModalDepartamento(behavior));
    }

    const modalActionAddDirector = (behavior) => {
        dispatch(onOpenModalAddDirectores(behavior));
    }

    return {
        isOpenModalDepartamento,
        isOpenModalAddDirectores,

        modalActionDepartamento,
        modalActionAddDirector
    };
};
