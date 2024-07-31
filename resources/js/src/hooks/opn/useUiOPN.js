import { useDispatch, useSelector } from "react-redux"
import { onOpenModalOPN } from "../../store/opn/uiOpnSlice";

export const useUiOPN = () => {

  const { isOpenModalOPN } = useSelector(state => state.uiOPN);
  const dispatch = useDispatch();

  const modalActionOPN = (behavior) => {
    dispatch(onOpenModalOPN(behavior));
  }

  return {
    isOpenModalOPN,

    modalActionOPN
  }
}
