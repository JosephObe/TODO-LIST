import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css"

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
        setOpenErrorModal,
    } = React.useContext(TodoContext);
    
    function onChange(event) {
        setNewTodoValue(event.target.value);
    }
    
    function onCancel() {
        setOpenModal(false);
    }
    
    function onSubmit(event) {
        event.preventDefault()
        if (newTodoValue) {
            addTodo(newTodoValue)
            setOpenModal(false)
        } else {
            setOpenErrorModal(true)
        }
    }
    
    return (
        <form onSubmit={onSubmit}>
            <label>Crear TODO</label>

            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Escribe tu nuevo TODO"
            />

            <div className="TodoForm-buttonContainer">
                <button
                className="TodoForm-button TodoForm-button--cancel"
                type="button"
                onClick={onCancel}
                >Cancelar</button>

                <button
                className="TodoForm-button TodoForm-button--add"
                type="submit"
                >Añadir</button>
            </div>
        </form>
    )
}

export { TodoForm }