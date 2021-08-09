import { ChangeEvent } from "react";
import { Todo } from "../../domain/Todo";
import style from "./index.module.scss";

export type TodoItemProp = Pick<Todo, 'title' | 'done'> & { onChange: (isDone: boolean)=> void }

export const todoItemClassName = ({TodoDone, Todo}: Record<string, string>) => (isDone: boolean)=> isDone ? `${Todo} ${TodoDone}` : Todo

const getTodoItemClassName = todoItemClassName(style)

const onChangeHandler = (onChange: (isDone: boolean) => void) => (e: ChangeEvent<HTMLInputElement>) =>
  onChange(e.currentTarget.checked)

  export const TodoItem: React.VFC<TodoItemProp> = ({ title, done, onChange }) => (
  <li className={getTodoItemClassName(done)}>
    <label>
      <input type="checkbox" onChange={onChangeHandler(onChange)} value="done" checked={done } className={style.TodoCheckbox} />{title}
    </label>
  </li>
);

export type TodoListProp = {
  /**
   * 表示する Todo
   */
  todos: Todo[],
  /**
   * Todo更新処理
   */
  onChange: (title: string)=> (isDone: boolean)=> void
}

export const TodoList: React.VFC<TodoListProp> = ({ todos, onChange }) => (
  <ul>
    {todos.map(({ title, done }) => (
      <TodoItem title={title} done={done} key={title} onChange={ onChange(title)}/>
    ))}
  </ul>
);
