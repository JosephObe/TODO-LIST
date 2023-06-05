import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItems } from '../TodoItems';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { Error } from '../Error';
import { ErrorModal } from '../ErrorModal';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    openErrorModal,
    setOpenErrorModal,
  } = React.useContext(TodoContext);
  
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
        
        {searchedTodos.map(todo => (
          <TodoItems
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      { openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}

      { openErrorModal && (
        <Error>
          <ErrorModal/>
        </Error>
      )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };