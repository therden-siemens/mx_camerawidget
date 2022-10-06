import { ReactElement, createElement } from "react";

export interface CameraButtonProps {
    
}

export function CameraButton({ }: CameraButtonProps): ReactElement {

    return <button className="btn mx-button btn-sm btn-primary" id="captureButton" ><span className="glyphicon glyphicon-camera" aria-hidden="true"></span></button>;
    
}
