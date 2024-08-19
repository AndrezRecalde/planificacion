import { useDispatch, useSelector } from "react-redux"
import { onOpenModalInstrumento } from "../../store/instrumento/uiInstrumentoSlice";

export const useUiInstrumento = () => {

 const { isOpenModalInstrumento } = useSelector(state => state.uiInstrumento);
 const dispatch = useDispatch();

 const modalActionInstrumento = (behavior) => {
    dispatch(onOpenModalInstrumento(behavior));
 }

  return {
    isOpenModalInstrumento,

    modalActionInstrumento
  }
}
