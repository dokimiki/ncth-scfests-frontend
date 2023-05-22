import React from "react";
import TextField from "@mui/material/TextField";

const Login = () => {
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

export default Login;
