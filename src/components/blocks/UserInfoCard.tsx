import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                    {userName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};
