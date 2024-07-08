import { useDispatch, useSelector } from "react-redux";
import { onOpenModalProveedor } from "../../../store/proveedor/uiProveedorSlice";

export const useUiProveedor = () => {
    const { isOpenModalProveedor } = useSelector((state) => state.uiProveedor);

    const dispatch = useDispatch();

    const modalActionProveedor = (behavior) => {
        behavior === 1
            ? dispatch(onOpenModalProveedor(true))
            : dispatch(onOpenModalProveedor(false));
    };

    return {
        isOpenModalProveedor,

        modalActionProveedor
    };
};
