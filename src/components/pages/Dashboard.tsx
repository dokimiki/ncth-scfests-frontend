import { PageTitleContext } from "context/PageTitleContext";
import { useContext, useEffect } from "react";

export const Dashboard = function () {
    const { setPageTitle } = useContext(PageTitleContext);
    useEffect(() => setPageTitle("ダッシュボード"), [setPageTitle]);
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
};
