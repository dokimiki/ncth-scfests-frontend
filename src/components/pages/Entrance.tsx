import { QRReader } from "components/blocks/QRReader";
import { UserInfoCard } from "components/blocks/UserInfoCard";
import { useState, useContext, useEffect } from "react";

import { useSnackbar } from "notistack";

import { PageTitleContext } from "context/PageTitleContext";

import { QRCodeURLToID } from "components/libs/QRCodeURLToID";

import Box from "@mui/material/Box";
import { InputAdornment, TextField, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import useMediaQuery from "@mui/material/useMediaQuery";

export const Entrance = function () {
    const [QRContent, setQRContent] = useState("");
    const [userID, setUserID] = useState("");
    const [isOpenUserInfoDrawer, setOpenUserInfoDrawer] = useState(false);
    const { setPageTitle } = useContext(PageTitleContext);

    useEffect(() => setPageTitle("入場受付"), [setPageTitle]);

    const { enqueueSnackbar } = useSnackbar();

    const theme = useTheme();

    useEffect(() => {
        setOpenUserInfoDrawer(false);
        if (QRContent === "") {
            setUserID("");
            return;
        }
        try {
            const ID = QRCodeURLToID(QRContent, true);
            setTimeout(() => {
                ID && setUserID(ID);
                setOpenUserInfoDrawer(true);
            }, 100);
        } catch (e) {
            if (e instanceof Error) {
                enqueueSnackbar(e.message, {
                    variant: "error",
                });
            } else {
                enqueueSnackbar("QRコード読み取りでエラーが発生しました。", {
                    variant: "error",
                });
            }
        }
    }, [QRContent, enqueueSnackbar]);

    return (
        <Grid container spacing={2}>
            <Grid xs={12}>
                <Typography variant="h4">来校者の情報検索</Typography>
                <Typography>QRコードを読み取ってください。</Typography>
            </Grid>
            <Grid xs={12}>
                {" "}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-around",
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <Box
                        sx={{
                            width: { md: "40%", xs: "80%" },
                            maxWidth: "500px",
                        }}
                    >
                        <Grid>
                            <QRReader
                                setQRContent={setQRContent}
                                QRContent={QRContent}
                            />
                        </Grid>
                        <Grid>
                            <TextField
                                label="With normal TextField"
                                id="outlined-start-adornment"
                                sx={{ m: 1, width: "25ch" }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            kg
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                    </Box>

                    {/* PC用 */}
                    <Box
                        sx={{
                            width: "50%",
                            maxWidth: "600px",
                            display: { md: "block", xs: "none" },
                            aspectRatio: 16 / 9,
                        }}
                    >
                        <UserInfoCard
                            userID={userID}
                            setQRContent={setQRContent}
                        />
                    </Box>

                    {/* スマホ用 */}

                    <SwipeableDrawer
                        anchor="bottom"
                        open={
                            useMediaQuery(theme.breakpoints.up("md"))
                                ? false
                                : isOpenUserInfoDrawer
                        }
                        onClose={() => setOpenUserInfoDrawer(false)}
                        onOpen={() => setOpenUserInfoDrawer(true)}
                        swipeAreaWidth={56}
                        disableSwipeToOpen={false}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        <Box
                            sx={{
                                width: 30,
                                height: 6,
                                backgroundColor:
                                    theme.palette.mode === "light"
                                        ? grey[300]
                                        : grey[900],
                                borderRadius: 3,
                                position: "absolute",
                                top: 8,
                                left: "calc(50% - 15px)",
                            }}
                        />
                        <Box sx={{ height: "38.2vh" }}>
                            <UserInfoCard
                                userID={userID}
                                setQRContent={setQRContent}
                            />
                        </Box>
                    </SwipeableDrawer>
                </Box>
            </Grid>
        </Grid>
    );
};
