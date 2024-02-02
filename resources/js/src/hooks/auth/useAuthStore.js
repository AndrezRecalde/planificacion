import { useDispatch, useSelector } from "react-redux";
import {
    onAuthenticate,
    onClearErrores,
    onClearValidates,
    onLoading,
    onLogout,
    onValidate,
} from "../../store/auth/authSlice";
import planningApi from "../../api/planningApi";

export const useAuthStore = () => {
    const { isLoading, user, validate, errores } = useSelector(
        (state) => state.auth
    );
    const dispatch = useDispatch();

    const startLogin = async ({ dni, password }) => {
        try {
            dispatch(onLoading());
            const { data } = await planningApi.post("/auth/login", {
                dni,
                password,
            });
            const { data: userData } = data;
            console.log(userData);
            localStorage.setItem(
                "service_user",
                JSON.stringify(userData.usuario)
            );
            localStorage.setItem("auth_token", userData.token);
            localStorage.setItem("token_init_date", new Date().getTime());
            dispatch(onAuthenticate(userData.usuario));
        } catch (error) {
            error.response.data.errores
                ? dispatch(onValidate(error.response.data.errores))
                : dispatch(onLogout(error.response.data.msg));

            setTimeout(() => {
                //dispatch(onClearValidates());
                dispatch(onClearErrores());
            }, 2000);
        }
    };

    const checkAuthToken = async () => {
        const token = localStorage.getItem("auth_token");
        if (!token) return dispatch(onLogout());

        try {
            const { data } = await planningApi.get("/refresh");
            const { data: userData } = data;
            localStorage.setItem(
                "service_user",
                JSON.stringify(userData.usuario)
            );
            localStorage.setItem("auth_token", userData.token);
            localStorage.setItem("token_init_date", new Date().getTime());
            dispatch(onAuthenticate(userData.usuario));
        } catch (error) {
            console.log(error)
            localStorage.clear();
            dispatch(onLogout());
        }
    };

    const startLogout = async () => {
        try {
            await planningApi.post("/auth/logout");
            localStorage.clear();
            dispatch(onLogout());
        } catch (error) {
            localStorage.clear();
            dispatch(onLogout());
        }
    };

    return {
        isLoading,
        user,
        validate,
        errores,

        startLogin,
        checkAuthToken,
        startLogout,
    };
};