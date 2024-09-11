import React, { useState, useReducer } from "react";
import ToDoItem from "./ToDoItem";

const initialValue = [];

function reducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: crypto.randomUUID(),
                    text: action.payload.text,
                    completed: false,
                },
            ];
        case "TOGGLE_TODO":
            return state.map((todo) =>
                todo.id === action.payload
                    ? { ...state, completed: !todo.completed }
                    : todo
            );
        default:
            return state;
    }
}

export default function ToDoList() {
    const [inputValue, setInputValue] = useState("");
    const [todos, dispatch] = useReducer(reducer, initialValue);

    function handleSubmit(event) {
        event.preventDefault();
        if (inputValue.trim()) {
            dispatch({
                type: "ADD_TODO",
                payload: inputValue,
            });
        }
        setInputValue("");
    }

    function handleToggle(id) {
        dispatch({ type: "TOGGLE_TODO", payload: id });
    }

    return (
        <div>
            <h1>Todo Liste</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    placeholder="Neues Todo eintragen"
                />
                <button>Hinzufügen</button>
                <ul>
                    {todos.map((todo) => (
                        <ToDoItem
                            key={todo.id}
                            todo={todo}
                            handleToggle={handleToggle}
                        />
                    ))}
                </ul>
                <p>Erledigte Todos: </p>
            </form>
        </div>
    );
}
