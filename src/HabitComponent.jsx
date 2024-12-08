import React, { useState } from 'react';
import TaskComponent from './TaskComponent';
import TaskList from './TaskList';
/*import './HabitComponent.css';*/
import './styles.css';


function HabitComponent () {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);

        };

    return(
        <div className="habitList">
            <h1>Habits:</h1>
            <TaskComponent addTask={addTask} />
            <TaskList tasks={tasks} />
        </div>
    );

}
export default HabitComponent;