export const IDValidate = function (
    ID: string,
    shouldThrowError: boolean = false
): boolean {
    const IDPrefix = process.env.REACT_APP_ID_PREFIX ?? "";

    if (ID.split(".")[0] !== IDPrefix) {
        if (shouldThrowError) {
            throw new Error(
                "頭の文字が不正です。\n年度の違うIDではありませんか？"
            );
        } else {
            return false;
        }
    }

    const IDNumPart = ID.split(".")[1].replace("-", "");

    if (
        IDNumPart === undefined ||
        IDNumPart.length <= 0 ||
        isNaN(Number(IDNumPart))
    ) {
        if (shouldThrowError) {
            throw new Error(
                "IDの識別番号を認識できません。\nIDが間違っていませんか？"
            );
        } else {
            return false;
        }
    }

    const Validate = parseInt(IDNumPart.slice(0, 2));

    const IDUniquePart = IDNumPart.slice(2);

    let IDValidateCalc = 0;
    for (let i = 0; i < IDUniquePart.length; i++) {
        const validateTmp = (i + 1) % 2 === 0 ? 39 : 7;
        IDValidateCalc += parseInt(IDUniquePart[i]) * validateTmp;
    }
    IDValidateCalc %= 40;

    if (Validate !== IDValidateCalc) {
        if (shouldThrowError) {
            throw new Error(
                "チェックディジットが違っています。\nIDの数字が間違っていませんか？"
            );
        } else {
            return false;
        }
    }

    return true;
};
