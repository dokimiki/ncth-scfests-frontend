import { SetStateAction, Dispatch } from "react";
import {
    Tooltip,
    AppBar,
    Box,
    Toolbar,
    Typography,
    IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HelpIcon from "@mui/icons-material/Help";

type HeaderProps = {
    toggleDrawerOpen: Function;
};

export const Header = function (props: HeaderProps) {
    const { toggleDrawerOpen } = props;
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => toggleDrawerOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Scfests
                    </Typography>
                    <Tooltip title="ヘルプ">
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                        >
                            <HelpIcon />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
