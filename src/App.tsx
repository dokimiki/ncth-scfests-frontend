import React, { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Pages import
import { Index } from "components/pages/Index";
import { Login } from "components/pages/Login";
import { Dashboard } from "components/pages/Dashboard";
import { Scan } from "components/pages/Scan";

import { Layout } from "components/layouts/Layout";
import { ErrorPage } from "components/pages/ErrorPage";
import * as colors from "@mui/material/colors";

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

export const App: FC = function () {
    const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

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
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
};
