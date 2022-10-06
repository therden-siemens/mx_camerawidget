import { ReactElement, createElement } from "react";
//import { CameraButton } from "./components/CameraButton";
import { CameraWidgetPreviewProps } from "../typings/CameraWidgetProps";

export function preview({ }: CameraWidgetPreviewProps): ReactElement {
    return <a>Placeholder for camera widget</a>;
}

export function getPreviewCss(): string {
    return require("./ui/CameraWidget.css");
}
