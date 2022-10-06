/**
 * This file was generated from CameraWidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { DynamicValue, EditableValue, FileValue } from "mendix";

export interface CameraWidgetContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    identifier: string;
    allowCapture: boolean;
    fileEntity: DynamicValue<FileValue>;
    base64String: EditableValue<string>;
}

export interface CameraWidgetPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    identifier: string;
    allowCapture: boolean;
    fileEntity: string;
    base64String: string;
}
