import { ChangeEvent, FC, FormEvent } from 'react';

interface Props {
  title: string;
  onClear: () => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  todosStatus: string;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTodoStatus: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const TodoFilter: FC<Props> = (props) => {
  const {
    title,
    onClear,
    onSubmit,
    todosStatus,
    onChangeTitle,
    onChangeTodoStatus,
  } = props;

  return (
    <form
      className="field has-addons"
      onSubmit={onSubmit}
    >
      <div className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            value={todosStatus}
            onChange={onChangeTodoStatus}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </span>
      </div>

      <div className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={title}
          onChange={onChangeTitle}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        <div className="icon is-right" style={{ pointerEvents: 'all' }}>
          {title
            && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
              <button
                data-cy="clearSearchButton"
                type="button"
                className="delete"
                onClick={onClear}
              />
            )}
        </div>
      </div>
    </form>
  );
};
