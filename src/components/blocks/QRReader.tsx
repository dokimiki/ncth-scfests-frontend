/** @jsxImportSource @emotion/react */
import { QrScanner } from "@yudiel/react-qr-scanner";
import { useState, SetStateAction, Dispatch } from "react";
import { css } from "@emotion/react";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import NoPhotographyIcon from "@mui/icons-material/NoPhotography";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import CameraswitchTwoToneIcon from "@mui/icons-material/CameraswitchTwoTone";
import CameraAlt from "@mui/icons-material/CameraAlt";
import AddIcon from "@mui/icons-material/Add";

const videoConstraints: MediaTrackConstraints = {
    width: {
        min: 300,
        ideal: 480,
        max: 1280,
    },
    height: {
        min: 300,
        ideal: 480,
        max: 1280,
    },
    frameRate: {
        min: 10,
        ideal: 15,
        max: 30,
    },
};

const scannerContainerStyle = css`
    * {
        border-radius: 0.5rem 0.5rem 0 0;
    }
`;

const switchCameraButtonStyle = css`
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
`;

const cameraTargetStyle = css`
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
`;

function URLToID(url: string): string {
    return url;
}

const offScanner = (
    <div
        css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `}
    >
        <NoPhotographyIcon style={{ fontSize: "10rem" }} />
        <p className="text-sm">カメラがオフの状態です。</p>
    </div>
);

type CameraErrorProps = {
    errorMessage: string;
    errorClear: Function;
    toggleUseCamera: Function;
};

const CameraError = function (props: CameraErrorProps) {
    const { errorMessage, errorClear, toggleUseCamera } = props;

    const theme = useTheme();

    return (
        <div
            css={css`
                position: relative;
            `}
        >
            <div
                css={css`
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                `}
            >
                <AnnouncementIcon style={{ fontSize: "10rem" }} />
                <p className="text-sm">カメラのエラーです。</p>
                <p className="text-sm">
                    エラーメッセージ: <code>{errorMessage}</code>
                </p>
            </div>

            <Tooltip title="カメラを切り替える" css={switchCameraButtonStyle}>
                <IconButton
                    sx={{
                        margin: theme.spacing(1),
                        color: "#fff",
                    }}
                    onClick={() => {
                        errorClear();
                        toggleUseCamera();
                    }}
                >
                    <CameraswitchTwoToneIcon />
                </IconButton>
            </Tooltip>
        </div>
    );
};

type ScannerProps = {
    setError: Dispatch<SetStateAction<boolean>>;
    setCameraErrorMessage: Dispatch<SetStateAction<string>>;
    setQRResult: Dispatch<SetStateAction<string>>;
    toggleUseCamera: Function;
    isEnvironmentCamera: boolean;
};

const Scanner = function (props: ScannerProps) {
    const {
        setError,
        setCameraErrorMessage,
        setQRResult,
        toggleUseCamera,
        isEnvironmentCamera,
    } = props;

    let lastScannedQR = "";

    let environmentCamera = Object.assign(
        { facingMode: { ideal: "environment" } },
        videoConstraints
    );
    let userCamera = Object.assign(
        { facingMode: { ideal: "user" } },
        videoConstraints
    );
    let debugCamera = Object.assign(
        {
            deviceId:
                "c7652186402b08fcfd81a15d225905952ecee9770c52d9cdc65e658e02e7d655",
        },
        videoConstraints
    );

    const theme = useTheme();

    return (
        <div
            css={css`
                position: relative;
            `}
        >
            <QrScanner
                constraints={
                    isEnvironmentCamera ? debugCamera : userCamera // TODO: debugCameraを削除する
                }
                scanDelay={500}
                onDecode={(result) => {
                    if (lastScannedQR !== result) {
                        console.log(result);
                        lastScannedQR = result;
                        setQRResult(result);
                    }
                }}
                onError={(error) => {
                    setError(true);
                    setCameraErrorMessage(error?.message ?? "");
                    console.log(error);
                }}
                viewFinderBorder={0}
                viewFinder={function () {
                    return (
                        <>
                            <div css={cameraTargetStyle}>
                                <AddIcon />
                            </div>
                        </>
                    );
                }}
            />

            <Tooltip title="カメラを切り替える" css={switchCameraButtonStyle}>
                <IconButton
                    sx={{
                        margin: theme.spacing(1),
                        color: "#fff",
                    }}
                    onClick={() => {
                        toggleUseCamera();
                    }}
                >
                    <CameraswitchTwoToneIcon />
                </IconButton>
            </Tooltip>
        </div>
    );
};

type QRIDReaderProps = {
    setQRContent: Dispatch<SetStateAction<string>>;
    width?: string;
};

export const QRReader = function (props: QRIDReaderProps) {
    const { setQRContent, width = "50vmin" } = props;

    const [isScanning, setIsScanning] = useState(true);
    const [isCameraError, setIsCameraError] = useState(false);
    const [cameraErrorMessage, setCameraErrorMessage] = useState("");
    const [isUseEnvironmentCamera, setIsUseEnvironmentCamera] = useState(true);

    const toggleUseCamera = () => {
        setIsUseEnvironmentCamera(!isUseEnvironmentCamera);
    };

    const toggleScan = () => {
        setIsScanning(!isScanning);
    };

    const clearError = () => {
        setIsCameraError(false);
        setCameraErrorMessage("");
    };

    const theme = useTheme();

    const scannerStyle = css`
        width: 100%;
        aspect-ratio: 1;
        border-radius: 0.5rem;
        > div {
            width: 100%;
            height: 100%;
            background: ${theme.palette.divider};
        }
    `;

    return (
        <div
            css={css`
                width: ${width};
                border-radius: 0.5rem;
                border-style: solid;
                border-width: 1px;
                border-color: ${theme.palette.divider};
            `}
        >
            <div css={scannerContainerStyle}>
                <div css={scannerStyle}>
                    {isCameraError ? (
                        <CameraError
                            errorMessage={cameraErrorMessage}
                            errorClear={clearError}
                            toggleUseCamera={toggleUseCamera}
                        />
                    ) : isScanning ? (
                        <Scanner
                            setError={setIsCameraError}
                            setCameraErrorMessage={setCameraErrorMessage}
                            setQRResult={setQRContent}
                            toggleUseCamera={toggleUseCamera}
                            isEnvironmentCamera={isUseEnvironmentCamera}
                        />
                    ) : (
                        offScanner
                    )}
                </div>
            </div>

            <Button
                onClick={() => {
                    toggleScan();
                    clearError();
                }}
                fullWidth={true}
                color={isScanning ? "warning" : "success"}
                startIcon={isScanning ? <NoPhotographyIcon /> : <CameraAlt />}
                variant="contained"
                css={css`
                    border-radius: 0 0 0.5rem 0.5rem;
                `}
            >
                {isScanning ? "スキャンを一時停止" : "スキャンを開始"}
            </Button>
        </div>
    );
};