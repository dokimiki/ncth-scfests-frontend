import { useContext } from "react";
import {
    Tooltip,
    AppBar,
    Box,
    Button,
    Toolbar,
    Typography,
    IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

import { PageTitleContext } from "context/PageTitleContext";
import { useTheme } from "@mui/material/styles";

type HeaderProps = {
    toggleDrawerOpen: Function;
    drawerWidth: number;
};

export const Header = function (props: HeaderProps) {
    const { toggleDrawerOpen, drawerWidth } = props;

    const { title } = useContext(PageTitleContext);

    const theme = useTheme();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, display: { sm: "none" } }}
                        onClick={() => toggleDrawerOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        {title}
                    </Typography>
                    <Tooltip title="ヘルプ">
                        <Button
                            variant="outlined"
                            color="inherit"
                            size="medium"
                            sx={{
                                minWidth: "0",
                                padding: "5px",
                                borderRadius:
                                    theme.shape.borderRadius * 2 + "px",
                                borderColor: "rgba(255, 255, 255, 0.3)",
                            }}
                        >
                            <HelpOutlineOutlinedIcon />
                        </Button>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
