import { useState } from "react";
import Button from "../../components/Global/Button";
import Input from "../../components/Global/Input";
import TodoItem from "./TodoItem";
import { useTodo } from "./useTodo";

const TodoList: React.FC = () => {
  const {
    todos,
    addTodo,
    newItem,
    setNewItem,
    completeTodo,
    deleteTodo,
    updateTodo,
    startEditing,
    isEditMode,
  } = useTodo();

  return (
    <>
      <h1>Tasks Of The Day</h1>
      <div>
        <Input
          type="text"
          placeholder="Add Todo From Here..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        {!isEditMode ? (
          <Button onClick={() => addTodo(newItem)}>Add</Button>
        ) : (
          <Button onClick={() => updateTodo(newItem)}>Update</Button>
        )}
      </div>
      <ul>
        {todos &&
          todos.map((item, index) => (
            <TodoItem
              key={index}
              todo={item}
              onEdit={() => startEditing(item.id)}
              onComplete={() => completeTodo(item.id)}
              onDelete={() => deleteTodo(item.id)}
            />
          ))}
      </ul>
    </>
  );
};

export default TodoList;
