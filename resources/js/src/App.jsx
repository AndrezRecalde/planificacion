import "./assets/styles/index.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/spotlight/styles.css";
import "mantine-react-table/styles.css";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";
import { theme } from "./theme";
import { store } from "./store";

export const App = () => {
    return (
        <MantineProvider theme={theme} defaultColorScheme="light">
            <Provider store={store}>
                <BrowserRouter>
                    <AppRouter />
                </BrowserRouter>
            </Provider>
        </MantineProvider>
    );
};
