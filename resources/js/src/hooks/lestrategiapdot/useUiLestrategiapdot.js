import { useDispatch, useSelector } from "react-redux"

export const useUiLestrategiapdot = () => {

    const { isOpenModalLestrategia } = useSelector(state => state.uiLestrategiapdot);

    const dispatch = useDispatch();

  return {
    isOpenModalLestrategia,

  }
}
