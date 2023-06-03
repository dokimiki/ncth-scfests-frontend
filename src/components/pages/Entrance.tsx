import { QRReader } from "components/blocks/QRReader";
import { UserInfoCard } from "components/blocks/UserInfoCard";
import { useState, useContext } from "react";

import { PageTitleContext } from "context/PageTitleContext";

import Box from "@mui/material/Box";

export const Entrance = function () {
    const [QRContent, setQRContent] = useState("");
    const { setPageTitle } = useContext(PageTitleContext);

    setPageTitle("入場受付");

    return (
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
                    width: "400px",
                }}
            >
                <QRReader setQRContent={setQRContent} />
            </Box>
            <Box>
                <UserInfoCard userID={QRContent} />
            </Box>
        </Box>
    );
};
