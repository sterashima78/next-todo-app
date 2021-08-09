import { createContext, useContext } from "react";
import { FetchTodo, SaveTodo } from "../domain/Todo";
import { fetchTodo, saveTodo } from "../infrastructure/Todo/localstorage";

type TodoContextProps = {
  saveTodo: SaveTodo;
  fetchTodo: FetchTodo;
};

const TodoContext = createContext<TodoContextProps>({
  saveTodo,
  fetchTodo,
});

export const TodoProvider: React.FC = ({ children }) => {
  return (
    <TodoContext.Provider
      value={{
        saveTodo,
        fetchTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
