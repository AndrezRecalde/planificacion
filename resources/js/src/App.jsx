import "./assets/styles/index.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";
import { theme } from "./theme";


export const App = () => {
    return (
        <MantineProvider theme={theme}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </MantineProvider>
    );
};
