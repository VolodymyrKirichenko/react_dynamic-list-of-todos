/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
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
  const [query, setQuery] = useState('');
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
  const [hasLoadingError, setHasLoadingError] = useState(false);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const todosFromServer = await getTodos();

        setTodos(todosFromServer);
      } catch (error) {
        setHasLoadingError(true);
      }
    };

    loadTodos();
  }, []);

  const filterTodo = todos.filter((todo) => {
    switch (todosStatus) {
      case 'active':
        return !todo.completed && todo.title.toLowerCase().includes(query.toLowerCase());
      case 'completed':
        return todo.completed && todo.title.toLowerCase().includes(query.toLowerCase());
      default:
        return todo.title.toLowerCase().includes(query.toLowerCase());
    }
  });

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="box">
            <h1 className="title">Todos:</h1>

            <div className="block">
              <TodoFilter
                query={query}
                setQuery={setQuery}
                todosStatus={todosStatus}
                setTodosStatus={setTodosStatus}
              />
            </div>

            <div className="block">
              {todos.length > 0
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
          setSelectedTodo={setSelectedTodo}
          setHasLoadingError={setHasLoadingError}
        />
      )}

      {hasLoadingError
        && (
          <div className="notification is-danger is-light">
            Loading error
          </div>
        )}
    </>
  );
};
