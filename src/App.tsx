import { FC, useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Pages import
import { Index } from "components/pages/Index";
import { Login } from "components/pages/Login";
import { Dashboard } from "components/pages/Dashboard";
import { Scan } from "components/pages/Scan";

import { DarkModeContext } from "context/DarkModeContext";

import { Layout } from "components/layouts/Layout";
import { ErrorPage } from "components/pages/ErrorPage";
import * as colors from "@mui/material/colors";

export const App: FC = function () {
    const defaultDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const setDarkMode = localStorage.getItem("isDarkMode");

    const [isDarkMode, setIsDarkMode] = useState(
        typeof setDarkMode === "string"
            ? JSON.parse(setDarkMode)
            : defaultDarkMode
    );

    useEffect(() => {
        localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    const toggleDarkMode = function () {
        setIsDarkMode(!isDarkMode);
    };

    const colorMode = {
        isDarkMode: isDarkMode,
        toggleDarkMode: () => toggleDarkMode(),
        setDarkMode: (value: boolean) => setIsDarkMode(value),
    };

    const theme = createTheme({
        palette: {
            mode: isDarkMode ? "dark" : "light",
            primary: {
                main: colors.blue[500],
            },
        },
        typography: {
            fontFamily: [
                "Roboto",
                '"Noto Sans JP"',
                '"Helvetica"',
                "Arial",
                "sans-serif",
            ].join(","),
        },
    });

    return (
        <DarkModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <RouterProvider router={router} />
            </ThemeProvider>
        </DarkModeContext.Provider>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Index />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/scan",
                element: <Scan />,
            },
        ],
    },
]);
