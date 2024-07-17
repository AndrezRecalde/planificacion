import { useDispatch, useSelector } from "react-redux"
import { onOpenModalLineapdot } from "../../store/lineas_pdot/uiLineapdotSlice";

export const useUiLineapdot = () => {

    const { isOpenModalLineapdot } = useSelector(state => state.uiLineapdot);
    const dispatch = useDispatch();

    const modalActionLineapdot = (behavior) => {
        dispatch(onOpenModalLineapdot(behavior));
    }

  return {
    isOpenModalLineapdot,

    modalActionLineapdot
  }
}
