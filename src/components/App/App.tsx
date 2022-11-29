import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { TodoList } from '../TodoList';
import { TodoFilter } from '../TodoFilter';
import { TodoModal } from '../TodoModal';
import { Loader } from '../Loader';
import { useApp } from './hooks/useApp';

export const App: React.FC = () => {
  const {
    handleChangeTitle,
    handleClear,
    handleChangeTodoStatus,
    handleSubmit,
    handleDeleteTodo,
    isHasTodos,
    filterTodo,
    selectedTodo,
    hasLoadingError,
    title,
    todosStatus,
    setSelectedTodo,
    handleLoadingError,
  } = useApp();

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="box">
            <h1 className="title">Todos:</h1>

            <div className="block">
              <TodoFilter
                title={title}
                onClear={handleClear}
                onSubmit={handleSubmit}
                todosStatus={todosStatus}
                onChangeTitle={handleChangeTitle}
                onChangeTodoStatus={handleChangeTodoStatus}
              />
            </div>

            <div className="block">
              {isHasTodos
                ? (
                  <TodoList
                    todos={filterTodo}
                    selectedTodo={selectedTodo}
                    setSelectedTodo={setSelectedTodo}
                  />
                )
                : <Loader />}
            </div>
          </div>
        </div>
      </div>

      {selectedTodo && (
        <TodoModal
          selectedTodo={selectedTodo}
          onDelete={handleDeleteTodo}
          onError={handleLoadingError}
        />
      )}

      {hasLoadingError && (
        <div className="notification is-danger is-light">
          Loading error
        </div>
      )}
    </>
  );
};
