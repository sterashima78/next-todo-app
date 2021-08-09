export type Todo = {
  /**
   * Todo の題名
   */
  title: string;
  /**
   * Todo の詳細
   */
  description?: string;
  /**
   * Todoが完了したかどうか
   */
  done: boolean;
};

export const createTodo = (title: string) => ({
  title,
  done: false,
});

type Create = {
  type: "Create";
  title: string;
};

type Toggle = {
  type: "Toggle";
  title: string;
  done: boolean;
};

type UpdateInput = Create | Toggle;

const addTodo = (current: Todo[], title: string) => [
  ...current,
  createTodo(title),
];

const toggleTodo = (current: Todo[], title: string, done: boolean) =>
  current.map((todo) => (todo.title === title ? { ...todo, done } : todo));

export const updateInput = (current: Todo[], input: UpdateInput) => {
  switch (input.type) {
    case "Create":
      return addTodo(current, input.title);
    case "Toggle":
      return toggleTodo(current, input.title, input.done);
  }
};
