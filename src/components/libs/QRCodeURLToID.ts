import { IDValidate } from "components/libs/IDValidate";

export const QRCodeURLToID = function (
    url: string,
    shouldThrowError: boolean = false
): string | undefined {
    const QRCodeBaseURL = process.env.REACT_APP_QR_CODE_BASE_URL ?? "";
    if (!url) {
        if (shouldThrowError) {
            throw new Error("URLが入力されていません。");
        } else {
            return undefined;
        }
    }

    if (url.startsWith(QRCodeBaseURL)) {
        if (shouldThrowError) {
            throw new Error("IDではないQRコードです: " + url);
        } else {
            return undefined;
        }
    }

    const ID = url.slice(QRCodeBaseURL.length);

    if (ID.length < 1) {
        if (shouldThrowError) {
            throw new Error("QRコードにIDが含まれていません。");
        } else {
            return undefined;
        }
    }

    try {
        IDValidate(ID, shouldThrowError);
    } catch (e) {
        if (shouldThrowError) {
            if (e instanceof Error) {
                throw new Error("IDが不正です: " + e.message);
            } else {
                throw new Error("IDが不正です: " + e);
            }
        } else {
            return undefined;
        }
    }

    return ID;
};
