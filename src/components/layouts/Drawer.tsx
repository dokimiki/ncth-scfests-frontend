import React, { SetStateAction, Dispatch, useContext } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { DarkModeContext } from "context/DarkModeContext";
import { Link } from "react-router-dom";

type DrawerProps = {
    setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
};

type DrawerListItems = {
    text: string;
    icon: React.ReactNode;
    link: string;
};

type DrawerListBox = {
    title?: string;
    items: DrawerListItems[];
};

export const Drawer = function (props: DrawerProps) {
    const { setIsDrawerOpen } = props;

    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

    const drawerListBoxes: DrawerListBox[] = [
        {
            items: [
                {
                    text: "ホーム",
                    icon: <HomeIcon />,
                    link: "/",
                },
                {
                    text: "ダッシュボード",
                    icon: <InfoIcon />,
                    link: "/dashboard",
                },
            ],
        },
        {
            title: "入場管理",
            items: [
                {
                    text: "入場",
                    icon: <LoginIcon />,
                    link: "/entrance",
                },
            ],
        },
        {
            title: "アカウント",
            items: [
                {
                    text: "ログイン",
                    icon: <LoginIcon />,
                    link: "/login",
                },
                {
                    text: "登録",
                    icon: <HowToRegIcon />,
                    link: "/register",
                },
            ],
        },
    ];

    return (
        <div>
            <Toolbar sx={{ display: { xs: "block", sm: "none" } }} />
            <Toolbar>
                <Typography
                    variant="h5"
                    component="div"
                    sx={{ flexGrow: 1, fontWeight: "bold" }}
                >
                    Scfests
                </Typography>
            </Toolbar>
            <Divider />
            {drawerListBoxes.map((drawerListBox) => (
                <>
                    <List>
                        {drawerListBox.title && (
                            <ListItem>
                                <ListItemText secondary={drawerListBox.title} />
                            </ListItem>
                        )}

                        {drawerListBox.items.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton
                                    onClick={() => setIsDrawerOpen(false)}
                                    onKeyDown={() => setIsDrawerOpen(false)}
                                    component={Link}
                                    to={item.link}
                                >
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </>
            ))}
            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => {
                            console.log("clicked");
                            toggleDarkMode();
                        }}
                    >
                        <ListItemText primary="ダークモード" />
                        <MaterialUISwitch checked={isDarkMode} />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );
};

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
        margin: 1,
        padding: 0,
        transform: "translateX(6px)",
        "&.Mui-checked": {
            color: "#fff",
            transform: "translateX(22px)",
            "& .MuiSwitch-thumb:before": {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    "#fff"
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor:
                    theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
            },
        },
    },
    "& .MuiSwitch-thumb": {
        backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
        width: 32,
        height: 32,
        "&:before": {
            content: "''",
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                "#fff"
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    "& .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        borderRadius: 20 / 2,
    },
}));
