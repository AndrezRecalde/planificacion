import { useDispatch, useSelector } from "react-redux";
import { onOpenModalStatusUsuario, onOpenModalUsuario } from "../../store/user/uiUserSlice";

export const useUiUsuario = () => {
    const { isOpenModalUsuario, isOpenModalStatusUsuario } = useSelector(
        (state) => state.uiUsuario
    );
    const dispatch = useDispatch();

    const modalActionUsuario = (behavior) => {
        dispatch(onOpenModalUsuario(behavior));
    }

    const modalActionStatusUsuario = (behavior) => {
        dispatch(onOpenModalStatusUsuario(behavior));
    }

    return {
        isOpenModalUsuario,
        isOpenModalStatusUsuario,

        modalActionUsuario,
        modalActionStatusUsuario
    };
};
