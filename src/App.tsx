import { FC, useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Pages import
import { Index } from "components/pages/Index";
import { Login } from "components/pages/Login";
import { Dashboard } from "components/pages/Dashboard";
import { Entrance } from "components/pages/Entrance";

import { DarkModeContext } from "context/DarkModeContext";
import { PageTitleContext } from "context/PageTitleContext";

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

    const colorModeContext = {
        isDarkMode: isDarkMode,
        toggleDarkMode: () => toggleDarkMode(),
        setDarkMode: (value: boolean) => setIsDarkMode(value),
    };

    const [pageTitle, setPageTitle] = useState("Home");

    useEffect(() => {
        document.title =
            pageTitleContext.titlePrefix +
            pageTitle +
            pageTitleContext.titleSuffix;
    });

    const pageTitleContext = {
        title: pageTitle,
        titlePrefix: "",
        titleSuffix: " - Scfests",
        setPageTitle: (value: string) => setPageTitle(value),
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
        <PageTitleContext.Provider value={pageTitleContext}>
            <DarkModeContext.Provider value={colorModeContext}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <RouterProvider router={router} />
                </ThemeProvider>
            </DarkModeContext.Provider>
        </PageTitleContext.Provider>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Layout outlet={<ErrorPage />} />,
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
                path: "/entrance",
                element: <Entrance />,
            },
        ],
    },
]);
