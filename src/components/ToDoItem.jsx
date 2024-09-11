import React, { useId } from "react";

export default function ToDoItem({ todo, handleToggle }) {
    const id = useId();

    return (
        <div>
            <li>
                <div>
                    <input type="checkbox" id={id} onChange={() => handleToggle(todo.id)}/>
                    <label htmlFor={id} style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.text}</label>
                </div>
                <button>Löschen</button>
            </li>
        </div>
    );
}
