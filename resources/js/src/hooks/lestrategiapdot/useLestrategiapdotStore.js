import { useDispatch, useSelector } from "react-redux";
import { useErrorException } from "../../hooks";
import { onLoadErrores } from "../../store/lestrategia/lestrategiapdotSlice";

export const useLestrategiapdotStore = () => {
    const { isLoading, lestrategias, activateLestrategia, message, errores } =
        useSelector((state) => state.lestrategiapdot);

    const { ExceptionMessageError } = useErrorException(onLoadErrores);

    const dispatch = useDispatch();

    return {
        isLoading,
        lestrategias,
        activateLestrategia,
        message,
        errores,
    };
};
