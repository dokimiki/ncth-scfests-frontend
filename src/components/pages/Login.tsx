import { useContext, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { PageTitleContext } from "context/PageTitleContext";

export const Login = function () {
    const { setPageTitle } = useContext(PageTitleContext);
    useEffect(() => setPageTitle("入場受付"), [setPageTitle]);
    return (
        <div>
            <h1>Login</h1>
            <TextField
                className="p-8"
                id="filled-basic"
                label="ユーザーID"
                variant="filled"
            />
            <br />
            <TextField
                className="p-8"
                id="filled-basic"
                label="パスワード"
                variant="filled"
            />
        </div>
    );
};
