import { useState } from "react";

import "./TaskInput.css";
import type {TaskInputProps} from "../../types";
import * as React from "react";

const TaskInput = ({ onAdd, onToggleAll, hasTasks, allCompleted }: TaskInputProps) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onAdd(inputValue);
        setInputValue("");
    }

    return (
        <form className="input-form-wrapper" onSubmit={handleSubmit}>
            <svg
                className="dropdown-arrow"
                width="61"
                height="61"
                viewBox="0 0 61 61"
                role="button"
                tabIndex={0}
                aria-label={hasTasks ? (allCompleted ? 'Uncomplete all tasks' : 'Complete all tasks') : 'No tasks to toggle'}
                aria-pressed={allCompleted}
                aria-disabled={!hasTasks}
                onClick={() => hasTasks && onToggleAll()}
                onKeyDown={(e) => {
                    if (!hasTasks) return;
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onToggleAll();
                    }
                }}
            >
                <path
                    d="M16 27 L30.5 38 L47 27"
                    stroke="#e6e6e6"
                    strokeWidth="7"
                    fill="none"
                />
            </svg>

            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                aria-label="New task"
                className="add-task-field"
                placeholder="What needs to be done?"
            />
        </form>
    );
}

export default TaskInput;