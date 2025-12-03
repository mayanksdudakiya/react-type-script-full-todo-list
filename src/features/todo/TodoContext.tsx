import { createContext } from "react";
import { useTodoState } from "./todoService";
import { TodoContextType, TodoProviderType } from "./types";

export const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider = (props: TodoProviderType) => {
  const { children } = props;

  const state = useTodoState();

  return <TodoContext.Provider value={state}>{children}</TodoContext.Provider>;
};
