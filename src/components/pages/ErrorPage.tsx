import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const ErrorPage = function () {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        if (error.status === 401) {
            // ...
        } else if (error.status === 404) {
            // ...
        }

        return (
            <>
                <h1>エラーが発生しました。係の人にお問い合わせください。</h1>
                <div id="error-page">
                    <h2>Oops! {error.status}</h2>
                    <p>{error.statusText}</p>
                    {error.data?.message && (
                        <p>
                            <i>{error.data.message}</i>
                        </p>
                    )}
                </div>
            </>
        );
    } else if (error instanceof Error) {
        return (
            <>
                <h1>エラーが発生しました。係の人にお問い合わせください。</h1>
                <div id="error-page">
                    <h2>Oops! Unexpected Error</h2>
                    <p>Something went wrong.</p>
                    <p>
                        <i>{error.message}</i>
                    </p>
                </div>
            </>
        );
    } else {
        return <></>;
    }
};
