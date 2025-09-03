import TaskItem from '../taskItem/TaskItem';

import './TaskList.css';
import type { Task } from '../../types/types.ts';

const TaskList = ({ tasks, toggleTask }: { tasks: Task[]; toggleTask: (id: number) => void }) => {
    return (
        <ul className="task-list">
            {tasks.map((task) => {
                return <TaskItem key={`${task.text}-${task.id}`} task={task} onToggle={() => toggleTask(task.id)}></TaskItem>;
            })}
        </ul>
    );
};

export default TaskList;
