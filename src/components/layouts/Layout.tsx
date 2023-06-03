import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "components/layouts/Header";
import { Drawer as AppDrawer } from "components/layouts/Drawer";

import { Toolbar, Drawer } from "@mui/material";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

export const Layout = function () {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawerOpen = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const drawerWidth = 240;

    const theme = useTheme();

    return (
        <Box sx={{ display: "flex" }}>
            <Header
                toggleDrawerOpen={toggleDrawerOpen}
                drawerWidth={drawerWidth}
            />
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    open={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    <AppDrawer setIsDrawerOpen={setIsDrawerOpen} />
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    <AppDrawer setIsDrawerOpen={setIsDrawerOpen} />
                </Drawer>
            </Box>

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    minHeight: "100vh",
                }}
            >
                <Toolbar />
                <Box
                    sx={{
                        width: "100%",
                        height: `calc(100% - ${theme.mixins.toolbar.minHeight}px)`,
                    }}
                >
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
};
