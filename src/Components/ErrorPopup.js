import React from "react";

const ErrorPopup = ({message})=>{
    return(<>
        <label className="label">
            <span className="label-text-alt text-error">{message}</span>
        </label>
    </>);
};

export default ErrorPopup;