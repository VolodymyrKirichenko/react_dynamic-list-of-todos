import {
  ChangeEvent, FormEvent, useCallback, useEffect, useState,
} from 'react';
import { Todo } from '../../../types/Todo';
import { getTodos } from '../../../api';

export const useApp = () => {
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

  const handleChangeTodoStatus = useCallback((
    e: ChangeEvent<HTMLSelectElement>,
  ) => {
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
        return !todo.completed
          && todo.title.toLowerCase().includes(title.toLowerCase().trim());
      case 'completed':
        return todo.completed
          && todo.title.toLowerCase().includes(title.toLowerCase().trim());
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

  return {
    handleChangeTitle,
    handleClear,
    handleChangeTodoStatus,
    handleSubmit,
    handleDeleteTodo,
    isHasTodos,
    filterTodo,
    loadTodos,
    selectedTodo,
    hasLoadingError,
    title,
    todosStatus,
    setSelectedTodo,
    handleLoadingError,
  };
};
