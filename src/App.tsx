/* eslint-disable max-len */
import React, {
  ChangeEvent, FormEvent, useCallback, useEffect, useState,
} from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { TodoList } from './components/TodoList';
import { TodoFilter } from './components/TodoFilter';
import { TodoModal } from './components/TodoModal';
import { Loader } from './components/Loader';
import { Todo } from './types/Todo';
import { getTodos } from './api';

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todosStatus, setTodosStatus] = useState('all');
  const [title, setTitle] = useState('');
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
  const [hasLoadingError, setHasLoadingError] = useState(false);

  const handleChangeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const handleClear = useCallback(() => {
    setTitle('');
  }, []);

  const handleChangeTodoStatus = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setTodosStatus(e.target.value);
  }, []);

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  const handleDeleteTodo = useCallback(() => {
    setSelectedTodo(null);
  }, []);

  const handleLoadingError = useCallback((error) => {
    setHasLoadingError(true);

    throw new Error(error);
  }, []);

  const isHasTodos = todos.length > 0;

  const filterTodo = todos.filter((todo) => {
    switch (todosStatus) {
      case 'active':
        return !todo.completed && todo.title.toLowerCase().includes(title.toLowerCase().trim());
      case 'completed':
        return todo.completed && todo.title.toLowerCase().includes(title.toLowerCase().trim());
      default:
        return todo.title.toLowerCase().includes(title.toLowerCase().trim());
    }
  });

  const loadTodos = useCallback(async () => {
    try {
      const todosFromServer = await getTodos();

      setTodos(todosFromServer);
    } catch (error) {
      handleLoadingError('Error');
    }
  }, []);

  useEffect(() => {
    loadTodos();
  }, []);

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
