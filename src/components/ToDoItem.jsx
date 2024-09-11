import React, { useId } from "react";

export default function ToDoItem({ todo, handleToggle, handleDelete }) {
    const id = useId();

    return (
        <div>
            <li className={todo.completed ? "completed" : ""}>
                <div>
                    <input type="checkbox" id={id} onChange={() => handleToggle(todo.id)}/>
                    <label htmlFor={id} style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.text}</label>
                </div>
                <button onClick={() => handleDelete(todo.id)}>Löschen</button>
            </li>
        </div>
    );
}
