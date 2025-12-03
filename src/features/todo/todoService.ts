import { useState } from "react";
import { TodoType } from "./types";

export const useTodoState = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [newItem, setNewItem] = useState<string>("");
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [editId, setEditId] = useState<string | null>(null);

  const addTodo = (name: string) => {
    if (!name.trim()) return;

    setTodos((prev) => [
      ...prev,
      { id: crypto.randomUUID(), name, isCompleted: false },
    ]);

    setNewItem("");
  };

  const completeTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const updateTodo = (newName: string) => {
    if (!isEditMode) return;

    if (!newName.trim()) return;


    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === editId ? { ...todo, name: newName } : todo
      )
    );

    setIsEditMode(false);
    setNewItem("");
    setEditId(null);
  };

  const startEditing = (id: string) => {
    const currentTodo = todos.find((t) => t.id === id);

    if (!currentTodo) return;

    setIsEditMode(true);
    setNewItem(currentTodo.name);
    setEditId(id);
  };

  return {
    todos,
    newItem,
    setNewItem,
    addTodo,
    completeTodo,
    deleteTodo,
    updateTodo,
    startEditing,
    isEditMode,
  };
};
