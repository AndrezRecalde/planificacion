import { useDispatch, useSelector } from "react-redux"
import { onOpenModalTipoProyecto } from "../../store/tipo_proyecto/uiTipoProyectoSlice";

export const useUiTipoProyecto = () => {

    const { isOpenModalTipoProyecto } = useSelector(state => state.uiTipoProyecto);

    const dispatch = useDispatch();

    const modalActionTipoProyecto = (behavior) => {
        dispatch(onOpenModalTipoProyecto(behavior));
    }

  return {
    isOpenModalTipoProyecto,

    modalActionTipoProyecto
  }
}
