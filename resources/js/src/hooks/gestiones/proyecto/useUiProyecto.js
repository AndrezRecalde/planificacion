import { useDispatch, useSelector } from "react-redux";
import { onOpenModalProyecto } from "../../../store/gestion/proyecto/uiProyectoSlice";

export const useUiProyecto = () => {
    const { isOpenModalProyecto } = useSelector((state) => state.uiProyecto);

    const dispatch = useDispatch();

    const modalActionProyecto = (behavior) => {
        behavior === 1
            ? dispatch(onOpenModalProyecto(true))
            : dispatch(onOpenModalProyecto(false));
    };

    return {
        isOpenModalProyecto,

        modalActionProyecto
    };
};
