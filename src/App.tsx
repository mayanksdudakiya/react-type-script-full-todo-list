import { TodoContext, TodoProvider } from "./features/todo/TodoContext";
import TodoList from "./features/todo/TodoList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </div>
  );
}
