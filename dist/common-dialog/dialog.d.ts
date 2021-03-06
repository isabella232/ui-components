import React, { ReactNode } from "react";
import { CommonDialogAction } from "./util";
import { CommonDialogClasses } from "../types/dialog";
declare type Props = {
    /** Custom action Buttons */
    actions: CommonDialogAction[];
    /** The callback used to hide the modal */
    hideModal: () => any;
    /** Is the modal visible */
    isVisible: boolean;
    /** Gives a Title to the Dialog */
    title: ReactNode;
    /** Provides an id to the component */
    id?: string;
    /** Provides a className to the component */
    className?: string;
    /** The value of the "Close" button. Defaults to "Close" */
    closeButtonText?: string;
    /**
     * Provides classNames to the dialog's sub-components. Options include:
     *
     *  - `root`: dialog's outermost div
     *
     *  - `paper`: wrapper around dialog
     *
     *  - `container`: wrapper around container content
     *
     *  - `title`
     *
     *  - `content`: dialog content wrapper
     *
     *  - `actions`: dialog actions wrapper
     *
     *  - `action`: wrapper around each individual dialog action
     */
    classes?: CommonDialogClasses;
};
/** `CommonDialog` provides a component to be used as a UI modal. */
export declare const CommonDialog: React.FC<Props>;
export {};
