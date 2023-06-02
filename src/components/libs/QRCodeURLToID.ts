import { IDValidate } from "components/libs/IDValidate";

export const QRCodeURLToID = function (url: string): string {
    const QRCodeBaseURL = process.env.REACT_APP_QR_CODE_BASE_URL ?? "";
    if (!url) {
        throw new Error("URLが入力されていません。");
    }
    if (url.startsWith(QRCodeBaseURL)) {
        throw new Error("IDではないQRコードです: " + url);
    }

    const ID = url.slice(QRCodeBaseURL.length);

    if (url.length < 1) {
        throw new Error("QRコードにIDが含まれていません。");
    }

    try {
        IDValidate(ID, true);
    } catch (e) {
        if (e instanceof Error) {
            throw new Error("IDが不正です: " + e.message);
        } else {
            throw new Error("IDが不正です: " + e);
        }
    }

    return ID;
};
