import { TextForm } from "../../Form";
import { TodoList } from "../../Todo";
import { createTodo, updateInput, Todo } from "../../../domain/Todo";
import { useEffect, useReducer } from "react";

type TodoPageProps = {
  onUpdate: (todos: Todo[]) => void;
  initialValue?: Todo[];
};

export const TodoPage: React.VFC<TodoPageProps> = ({
  onUpdate,
  initialValue,
}) => {
  const [todos, update] = useReducer(
    updateInput,
    initialValue || [createTodo("Todo")]
  );
  useEffect(() => onUpdate(todos));
  return (
    <div>
      <TextForm onSubmit={(title) => update({ type: "Create", title })} />
      <TodoList
        todos={todos}
        onChange={(title) => (done) => update({ type: "Toggle", title, done })}
      />
    </div>
  );
};
