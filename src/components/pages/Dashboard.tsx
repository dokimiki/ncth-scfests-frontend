import { PageTitleContext } from "context/PageTitleContext";
import { useContext } from "react";

export const Dashboard = function () {
    const { setPageTitle } = useContext(PageTitleContext);
    setPageTitle("ダッシュボード");
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
};
