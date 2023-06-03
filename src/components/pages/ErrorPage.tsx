import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Layout } from "components/layouts/Layout";
import { PageTitleContext } from "context/PageTitleContext";
import { useContext } from "react";

export const ErrorPage = function () {
    const { setPageTitle } = useContext(PageTitleContext);
    setPageTitle("エラー");
    const error = useRouteError();

    let errorStatus: number | undefined;
    let errorStatusText: string | undefined;
    let errorMessage: string | undefined;

    if (isRouteErrorResponse(error)) {
        errorStatus = error.status;
        errorStatusText = error.statusText;
        errorMessage = error.data?.message || "";
    }

    if (error instanceof Error) {
        errorMessage = error.message;
    }

    return (
        <>
            <h1>エラーが発生しました。係の人にお問い合わせください。</h1>
            <div id="error-page">
                <h2>Error status: {errorStatus}</h2>
                <p>Error status text: {errorStatusText}</p>
                <p>Error Message: {errorMessage}</p>
            </div>
        </>
    );
};
