/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { QRReader } from "components/blocks/QRReader";
import { UserInfoCard } from "components/blocks/UserInfoCard";
import { useState } from "react";

import Box from "@mui/material/Box";

export const Scan = function () {
    const [QRContent, setQRContent] = useState("");
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
                    width: "50vmin",
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
