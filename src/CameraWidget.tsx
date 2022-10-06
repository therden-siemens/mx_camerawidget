import { ReactElement, createElement, useRef, useState, useCallback } from "react";
//import { CameraButton } from "./components/CameraButton";
import Webcam from "react-webcam";
import { CameraWidgetContainerProps } from "../typings/CameraWidgetProps";

import "./ui/CameraWidget.css";

export function CameraWidget({ identifier, allowCapture, base64String }: CameraWidgetContainerProps): ReactElement {

    let button;

    const webcamRef = useRef<Webcam>(null);
    const [_imgSrc, setImgSrc] = useState<string | null>(null);
    
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current?.getScreenshot();

        console.log("Start capture");

        if (imageSrc != null) {

            setImgSrc(imageSrc);
            base64String.setTextValue(imageSrc); 
            console.log(imageSrc);
        }
                    
    }, [webcamRef, setImgSrc]);
       
      
    if (allowCapture) {
        button = <button className="btn mx-button btn-sm btn-primary" id="captureButton" onClick={capture} ><span className="glyphicon glyphicon-camera" aria-hidden="true"></span></button>;;
    } else {
        button = null;
    }


    
    return (
        <div className="CameraWidget">
            <Webcam audio={false} ref={webcamRef} id={identifier} screenshotFormat="image/jpeg"/>
            {button}
        </div>
    );

}
