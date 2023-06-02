/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { QRReader } from "components/blocks/QRReader";
import { useState } from "react";

export const Scan = function () {
    const [QRContent, setQRContent] = useState("");
    return (
        <>
            <p>URL: {QRContent}</p>
            <QRReader setQRContent={setQRContent} />
        </>
    );
};
