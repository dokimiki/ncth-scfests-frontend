/** @jsxImportSource @emotion/react */
import { Dispatch, SetStateAction } from "react";
import { css } from "@emotion/react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import Paper from "@mui/material/Paper";
import {
    GetGuestInfo,
    GuestInfo,
    GuestTypeToJapanese,
} from "components/libs/Guest";

type UserInfoCardProps = {
    userID: string;
    setQRContent?: Dispatch<SetStateAction<string>>;
};

export const UserInfoCard = function (props: UserInfoCardProps) {
    const { userID, setQRContent } = props;

    const guest: GuestInfo | undefined = GetGuestInfo(userID);

    const cardStyle = css`
        height: 100%;
        width: 100%;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    `;

    return (
        <Paper elevation={3} css={cardStyle}>
            <Typography variant="subtitle1">来校者情報</Typography>
            <div>
                <Typography variant="h5">
                    {guest ? GuestTypeToJapanese(guest.type) : <>&nbsp;</>}
                </Typography>
                <Divider />
                <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    gutterBottom
                >
                    {guest ? guest.id : <>&nbsp;</>}
                </Typography>
            </div>
            <div>
                <Typography variant="subtitle1" color="text.secondary">
                    {guest ? (
                        guest.invitedBy ? (
                            guest.invitedBy.type === "student" ? (
                                <>
                                    {guest.invitedBy.class}
                                    {guest.invitedBy.grade}{" "}
                                    {guest.invitedBy.studentNumber?.padStart(
                                        2,
                                        "0"
                                    )}{" "}
                                    {guest.invitedBy.name} より招待
                                </>
                            ) : (
                                <>{guest.invitedBy.name} より招待</>
                            )
                        ) : (
                            <>
                                {guest.class}
                                {guest.grade} {guest.studentNumber}
                            </>
                        )
                    ) : (
                        <>&nbsp;</>
                    )}
                </Typography>
                <Typography variant="h4">
                    {guest ? <>{guest.name} さん</> : <>&nbsp;</>}
                </Typography>
            </div>
            <div>
                <Button
                    size="medium"
                    variant="contained"
                    css={css`
                        margin: 0 0 0 auto;
                        display: block;
                    `}
                    onClick={() => {
                        setQRContent && setQRContent("");
                    }}
                    disabled={guest ? false : true}
                >
                    閉じる
                </Button>
            </div>
        </Paper>
    );
};
