import React, { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages import
import { Index } from "components/pages/Index";
import { Login } from "components/pages/Login";
import { Dashboard } from "components/pages/Dashboard";
import { Scan } from "components/pages/Scan";

import { Layout } from "components/layouts/Layout";
import { ErrorPage } from "components/pages/ErrorPage";

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

const App: FC = function () {
    return <RouterProvider router={router} />;
};

export default App;
