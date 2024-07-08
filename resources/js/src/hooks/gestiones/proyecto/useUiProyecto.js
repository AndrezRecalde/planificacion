import { useDispatch, useSelector } from "react-redux";
import {
    onOpenDrawerProyecto,
    onOpenModalProyecto,
} from "../../../store/proyecto/uiProyectoSlice";

export const useUiProyecto = () => {
    const { isOpenModalProyecto, isOpenDrawerProyecto } = useSelector(
        (state) => state.uiProyecto
    );

    const dispatch = useDispatch();

    const modalActionProyecto = (behavior) => {
        behavior === 1
            ? dispatch(onOpenModalProyecto(true))
            : dispatch(onOpenModalProyecto(false));
    };

    const drawerActionProyecto = (behavior) => {
        behavior === 1
            ? dispatch(onOpenDrawerProyecto(true))
            : dispatch(onOpenDrawerProyecto(false));
    };

    return {
        isOpenModalProyecto,
        isOpenDrawerProyecto,

        modalActionProyecto,
        drawerActionProyecto
    };
};
