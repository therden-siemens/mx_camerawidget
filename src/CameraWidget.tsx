import { ReactElement, createElement, useRef, useState, useCallback } from "react";
//import { CameraButton } from "./components/CameraButton";
import Webcam from "react-webcam";
import { CameraWidgetContainerProps } from "../typings/CameraWidgetProps";

import "./ui/CameraWidget.css";

export function CameraWidget({ identifier, allowCapture, base64String, widthDimension, heightDimension}: CameraWidgetContainerProps): ReactElement {

    let button;

    const webcamRef = useRef<Webcam>(null);
    const [_imgSrc, setImgSrc] = useState<string | null>(null);

    const videoConstraints = {
        width: Number(widthDimension) || 1200,
        height: Number(heightDimension) || 720
    };
    
    const capture = useCallback( () => {
        const imageSrc = webcamRef.current?.getScreenshot(videoConstraints);

        console.log("Start capture");

        if (imageSrc != null) {

            setImgSrc(imageSrc);
            base64String.setValue(imageSrc); 
            console.log(imageSrc);
        }
                    
    }, [webcamRef, setImgSrc, base64String]);
       
      
    if (allowCapture) {
        button = <button className="btn mx-button btn-sm btn-primary" id="captureButton" onClick={capture} ><span className="glyphicon glyphicon-camera" aria-hidden="true"></span></button>;;
    } else {
        button = null;
    }


    
    return (
        <div className="CameraWidget">
        
                <Webcam audio={false} ref={webcamRef} id={identifier} screenshotFormat="image/jpeg" minScreenshotHeight={Number(heightDimension)|| 1200} minScreenshotWidth={Number(widthDimension) || 720}/>

            {button}
        </div>
    );

}
