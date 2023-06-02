import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "components/layouts/Header";
import { Drawer } from "components/layouts/Drawer";

import { SwipeableDrawer, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";

export const Layout = function () {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawerOpen = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            <Header toggleDrawerOpen={toggleDrawerOpen} />
            <SwipeableDrawer
                sx={{
                    flexShrink: 0,
                }}
                anchor="left"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                onOpen={() => setIsDrawerOpen(true)}
            >
                <Drawer setIsDrawerOpen={setIsDrawerOpen} />
            </SwipeableDrawer>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                <Outlet />
            </Box>
        </>
    );
};
