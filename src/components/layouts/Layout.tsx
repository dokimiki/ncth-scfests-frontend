import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "components/layouts/Header";
import { Drawer as AppDrawer } from "components/layouts/Drawer";

import { Toolbar, Drawer } from "@mui/material";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

type LayoutProps = {
    outlet?: React.ReactNode;
};

export const Layout = function (props: LayoutProps) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawerOpen = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const drawerWidth = 240;

    const theme = useTheme();

    return (
        <Box
            sx={{
                display: "flex",
            }}
        >
            <Header
                toggleDrawerOpen={toggleDrawerOpen}
                drawerWidth={drawerWidth}
            />
            <Box
                component="nav"
                sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
                aria-label="mailbox folders"
            >
                {/* スマホ用 */}
                <Drawer
                    open={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                    sx={{
                        display: { xs: "block", md: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    <AppDrawer setIsDrawerOpen={setIsDrawerOpen} />
                </Drawer>
                {/* PC用 */}
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", md: "block" },
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
                    width: { md: `calc(100% - ${drawerWidth}px)` },
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
                    {props.outlet ? props.outlet : <Outlet />}
                </Box>
            </Box>
        </Box>
    );
};
