import React, { useState } from 'react';
import TaskComponent from './TaskComponent';
import TaskList from './TaskList';
import './CreateNewTask.css';


function CreateNewTask () {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);

        };

    return(
        <div className="taskList">
            <h1>Todo:</h1>
            <TaskComponent addTask={addTask} />
            <TaskList tasks={tasks} />
        </div>
    );

}
export default CreateNewTask;