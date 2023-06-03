/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import Paper from "@mui/material/Paper";

type UserInfoCardProps = {
    userID: string;
};

type UserInfo = {
    userName: string;
    userDescription: string;
    userImage: string;
};

const getUserInfo = function (userID: string): UserInfo {
    return {
        userName: userID,
        userDescription: "A random person",
        userImage: "https://picsum.photos/200",
    };
};

export const UserInfoCard = function (props: UserInfoCardProps) {
    const { userID } = props;

    const { userName, userDescription, userImage } = getUserInfo(userID);

    const cardStyle = css`
        aspect-ratio: 16 / 9;
        min-height: 300px;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    `;

    return (
        <Paper elevation={3} css={cardStyle}>
            <div>
                <Typography variant="h5">招待客</Typography>
                <Divider />
                <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    gutterBottom
                >
                    ID: R5.114 0009
                </Typography>
            </div>
            <div>
                <Typography variant="subtitle1" color="text.secondary">
                    I-3 99 Lorem Ipsum より招待
                </Typography>
                <Typography variant="h4">Lorem Ipsum さん</Typography>
            </div>
            <div>
                <Button
                    size="medium"
                    variant="contained"
                    css={css`
                        margin: 0 0 0 auto;
                        display: block;
                    `}
                >
                    閉じる
                </Button>
            </div>
        </Paper>
    );
};
