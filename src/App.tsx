import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages import
import Index from "./components/pages/Index";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";

const App: FC = () => {
    // TODO: ログインしているかどうかの判別を行う
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
