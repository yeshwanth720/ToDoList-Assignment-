import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("");
    const { addTodo } = useTodo();

    const add = (e) => {
        e.preventDefault();

        if (!todo) return;

        addTodo({ todo, completed: false });
        setTodo("");
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Your Task"
                className="w-full border border-gray-400 rounded-l-lg px-3 outline-none transition duration-200 bg-gray-900 bg-opacity-90 py-3.5 text-white text-2xl"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-700 text-white flex-shrink-0  text-1xl ">
                Add Task
            </button>
        </form>
    );
}

export default TodoForm;