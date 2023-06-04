import aspida, { FetchConfig, HTTPError } from "@aspida/fetch";
import React, { useState, useContext, useEffect } from "react";
import api from "api/$api";

import { PageTitleContext } from "context/PageTitleContext";

const fetchConfig: FetchConfig = {
    credentials: "include",
    throwHttpErrors: true,
};

const client = api(aspida(fetch, fetchConfig));

export const Index = function () {
    const [status, setStatus] = useState("now loading...");

    const { setPageTitle } = useContext(PageTitleContext);

    useEffect(() => setPageTitle("ホーム"), [setPageTitle]);

    (async () => {
        try {
            const data = await client.hello.get();
            setStatus(data.body.message !== undefined ? data.body.message : "");
        } catch (e) {
            console.error("Hello API の呼び出しに失敗しました。");
            setStatus("error");
            if (e instanceof HTTPError) {
                console.log(e.response.status);
                console.log(e.response.headers);
                console.log(e);
            } else {
                console.log(e);
            }
        }
    })();

    return (
        <div>
            <h1>Index Page</h1>
            <p>{status}</p>
        </div>
    );
};
