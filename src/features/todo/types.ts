import { ReactNode } from "react";

export interface TodoType {
  id: string;
  name: string;
  isCompleted: boolean;
}

export interface TodoContextType {
  todos: TodoType[];
  addTodo: (name: string) => void;
  newItem: string;
  setNewItem: (name: string) => void;
  completeTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string) => void;
  startEditing: (id: string) => void;
  isEditMode: boolean;
}

export interface TodoProviderType {
  children: ReactNode;
}
