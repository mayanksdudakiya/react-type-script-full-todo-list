import { TodoType } from "./types";

interface TodoItemPropsType {
  todo: TodoType;
  onComplete: () => void;
  onDelete: () => void;
  onEdit: () => void;
}

const TodoItem: React.FC<TodoItemPropsType> = (props) => {
  const { todo, onComplete, onDelete, onEdit } = props;

  return (
    <li className={todo?.isCompleted ? "strike" : undefined}>
      {todo?.name}
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onComplete}>Complete</button>
    </li>
  );
};

export default TodoItem;
