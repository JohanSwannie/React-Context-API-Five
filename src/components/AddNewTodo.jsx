import { useState, useRef, useEffect } from "react";
import { useTodo } from "../contexts/TodoContext";

function AddNewTodo() {
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodo();

  const addTodoRef = useRef();

  useEffect(() => {
    addTodoRef.current.focus();
  }, []);

  const addAnotherTodo = (event) => {
    event.preventDefault();
    if (!todo) {
      return;
    }
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={addAnotherTodo} className="flex border-white border-2">
      <input
        type="text"
        placeholder="Create a Todo......."
        className="w-full border placeholder:text-white-700 px-3 outline-none bg-white/20 py-1.5"
        value={todo}
        name="todo"
        ref={addTodoRef}
        maxLength={100}
        onChange={(event) => setTodo(event.target.value)}
      />
      <button
        type="submit"
        className="px-3 py-1 bg-green-600 text-white shrink-0 border-black border-2"
      >
        Add
      </button>
    </form>
  );
}

export default AddNewTodo;
