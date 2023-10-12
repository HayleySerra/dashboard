import React, { useState } from 'react';
import TaskComponent from './TaskComponent';
import TaskList from './TaskList';


function CreateNewTask () {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);

        };

    return(
        <div>
            <h1>Task List</h1>
            <TaskComponent addTask={addTask} />
            <TaskList tasks={tasks} />
        </div>
    );

}
export default CreateNewTask;