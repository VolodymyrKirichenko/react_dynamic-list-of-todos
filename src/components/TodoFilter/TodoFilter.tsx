import { FC } from 'react';

interface Props {
  query: string;
  setQuery: (query: string) => void;
  todosStatus: string;
  setTodosStatus: (todosStatus: string) => void;
}

export const TodoFilter: FC<Props> = (props) => {
  const {
    query,
    setQuery,
    todosStatus,
    setTodosStatus,
  } = props;

  return (
    <form
      className="field has-addons"
      onSubmit={e => e.preventDefault()}
    >
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            value={todosStatus}
            onChange={
              (e) => setTodosStatus(e.target.value)
            }
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="clearSearchButton"
            type="button"
            className="delete"
            onClick={() => setQuery('')}
          />
        </span>
      </p>
    </form>
  );
};
