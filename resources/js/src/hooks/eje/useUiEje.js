import { useDispatch, useSelector } from "react-redux"
import { onOpenModalEje } from "../../store/eje/uiEjeSlice";

export const useUiEje = () => {

    const { isOpenModalEje } = useSelector(state => state.uiEje);
    const dispatch = useDispatch();

    const modalActionEje = (behavior) => {
        dispatch(onOpenModalEje(behavior));
    }

  return {
    isOpenModalEje,

    modalActionEje
  }
}
