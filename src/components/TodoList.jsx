import { useRef, useState } from "react";

function TodoList() {
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState("");
    const [deleteId, setDeleteId] = useState("");
    let count = useRef(1);

    const addTodo = () => {
        if (input.trim() === "") return;
        const newTodo = { id: count.current, text: input };
        setTodo([...todo, newTodo]);
        count.current++;
        setInput("");
    };

    const deleteTodo = (id) => {
        setTodo(todo.filter((t) => t.id !== id));
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-4">
            <h1 className="text-4xl font-semibold text-center text-gray-800 mb-6">
                My Todo List
            </h1>
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Add new todo..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>
                <div className="flex space-x-2 mb-4">
                    <button
                        onClick={addTodo}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                    >
                        Add
                    </button>
                    <input
                        type="number"
                        placeholder="Delete todo number"
                        value={deleteId}
                        onChange={(e) => setDeleteId(e.target.value)}
                        className="w-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <button
                        onClick={() => deleteTodo(Number(deleteId))}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
                    >
                        Delete
                    </button>
                </div>
                <div>
                    {todo.length === 0 ? (
                        <p className="text-center text-gray-500">No tasks added yet.</p>
                    ) : (
                        todo.map((t) => (
                            <div
                                key={t.id}
                                className="flex justify-between items-center py-2 border-b border-gray-300"
                            >
                                <span className="text-lg text-gray-700">{t.id}. {t.text}</span>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default TodoList;
