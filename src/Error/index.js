import React from "react";
import ReactDOM from 'react-dom';
import './Error.css'

function Error({children}) {
    return ReactDOM.createPortal(
        <div className="styleModal">
            {children}
        </div>,
        document.getElementById('Error')
    )
}

export { Error };