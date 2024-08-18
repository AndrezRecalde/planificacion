import { useDispatch, useSelector } from "react-redux";
import {
    onOpenModalAddPermission,
    onOpenModalStatusUsuario,
    onOpenModalUsuario,
} from "../../store/user/uiUserSlice";

export const useUiUsuario = () => {
    const {
        isOpenModalUsuario,
        isOpenModalStatusUsuario,
        isOpenModalAddPermission,
    } = useSelector((state) => state.uiUsuario);
    const dispatch = useDispatch();

    const modalActionUsuario = (behavior) => {
        dispatch(onOpenModalUsuario(behavior));
    };

    const modalActionStatusUsuario = (behavior) => {
        dispatch(onOpenModalStatusUsuario(behavior));
    };

    const modalActionAddPermissions = (behavior) => {
        dispatch(onOpenModalAddPermission(behavior));
    }

    return {
        isOpenModalUsuario,
        isOpenModalStatusUsuario,
        isOpenModalAddPermission,

        modalActionUsuario,
        modalActionStatusUsuario,
        modalActionAddPermissions
    };
};
