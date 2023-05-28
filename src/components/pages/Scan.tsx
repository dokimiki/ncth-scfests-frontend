import { QrScanner } from "@yudiel/react-qr-scanner";
import React, { useState } from "react";

const videoConstraints: MediaTrackConstraints = {
    deviceId:
        "c7652186402b08fcfd81a15d225905952ecee9770c52d9cdc65e658e02e7d655",
    width: {
        min: 250,
        ideal: 250,
        max: 500,
    },
    height: {
        min: 250,
        ideal: 250,
        max: 500,
    },
    frameRate: {
        min: 10,
        ideal: 15,
        max: 30,
    },
};

const scanner = (
    <QrScanner
        constraints={videoConstraints}
        scanDelay={500}
        onDecode={(result) => alert(result)}
        onError={(error) => console.log(error?.message)}
        viewFinderBorder={0}
        viewFinder={function () {
            return <></>;
        }}
    />
);

export const Scan = function () {
    const [isScanning, setIsScanning] = useState(true);

    return (
        <div>
            <h1>Scan</h1>
            <button onClick={() => setIsScanning(!isScanning)}>
                switch scanning
            </button>
            <div className="w-1/2 h-1/2">{isScanning && scanner}</div>
        </div>
    );
};
