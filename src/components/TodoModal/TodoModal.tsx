import {
  FC, useCallback, useEffect, useState,
} from 'react';
import { Loader } from '../Loader';
import { Todo } from '../../types/Todo';
import { getUser } from '../../api';
import { User } from '../../types/User';

interface Props {
  selectedTodo: Todo;
  onDelete: () => void;
  onError: (error: string) => void;
}

export const TodoModal: FC<Props> = (props) => {
  const {
    selectedTodo,
    onDelete,
    onError,
  } = props;

  const {
    id,
    completed,
    userId,
    title,
  } = selectedTodo;

  const [user, setUser] = useState<User>();

  const loadUser = useCallback(async () => {
    try {
      const usersFromServer = await getUser(userId);

      setUser(usersFromServer);
    } catch (error) {
      onError('Error');
    }
  }, []);

  useEffect(() => {
    loadUser();
  }, [id]);

  return (
    <div className="modal is-active" data-cy="modal">
      <div className="modal-background" />

      {!user ? (
        <Loader />
      ) : (
        <div className="modal-card">
          <header className="modal-card-head">
            <div
              className="modal-card-title has-text-weight-medium"
              data-cy="modal-header"
            >
              {`Todo #${id}`}
            </div>

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              type="button"
              className="delete"
              data-cy="modal-close"
              onClick={onDelete}
            />
          </header>

          <div className="modal-card-body">
            <p className="block" data-cy="modal-title">
              {title}
            </p>

            <p className="block" data-cy="modal-user">
              {completed ? (
                <strong className="has-text-success">Done</strong>
              ) : (
                <strong className="has-text-danger">Planned</strong>
              )}

              {' by '}

              <a href={`mailto:${user.email}`}>
                {user.name}
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
