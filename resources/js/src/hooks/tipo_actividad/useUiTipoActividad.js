import { useDispatch, useSelector } from "react-redux"
import { onOpenModalTipoActividad } from "../../store/tipo_actividad/uiTipoActividadSlice";

export const useUiTipoActividad = () => {

    const { isOpenModalTipoActividad } = useSelector(state => state.uiTipoActividad);

    const dispatch = useDispatch();

    const modalActionTipoActividad = (behavior) => {
        dispatch(onOpenModalTipoActividad(behavior));
    }

  return {
    isOpenModalTipoActividad,

    modalActionTipoActividad
  }
}
