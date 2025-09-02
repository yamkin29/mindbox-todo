import { useTasks } from "./hooks/useTasks";

import TaskInput from './components/taskInput/TaskInput';
import TaskList from './components/taskList/TaskList';
import Footer from './components/footer/Footer';

import './App.css';

function App() {
    const { filteredTasks, itemsLeft, filter, setFilter, addTask, toggleTask, clearCompleted, toggleAll, hasTasks, allCompleted } = useTasks();

    return (
        <div className='app-container'>
            <div className="app">
                <h1 className="app-title">todos</h1>

                <div className="app-main">
                    <TaskInput onAdd={addTask} onToggleAll={toggleAll} hasTasks={hasTasks} allCompleted={allCompleted} />

                    <TaskList tasks={filteredTasks} toggleTask={toggleTask} />

                    <Footer filter={filter} setFilter={setFilter} itemsLeft={itemsLeft} clearCompleted={clearCompleted}/>
                </div>
            </div>
        </div>
    );
}

export default App;