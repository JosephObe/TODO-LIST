import React from "react";
import { TodoContext } from "../TodoContext";
import './ErrorModal.css'

function ErrorModal() {
    const { 
        setOpenErrorModal,
    } = React.useContext(TodoContext)
    function onSalir() {
        setOpenErrorModal(false)
    }
    return(
        <form>
            <label>Por favor llena el campo para agregar un TODO</label>
            <button
                className="ErrorModal-button ErrorModal-button--add"
                type="button"
                onClick={onSalir}
            >
                Salir
            </button>
        </form>
    )
}

export { ErrorModal }