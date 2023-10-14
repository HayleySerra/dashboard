import React, { useState } from 'react';

function TaskComponent ({ addTask }) {
    const [task, setTask] = useState('');

    const handleInputChange = (e) =>{
        setTask(e.target.value);
    };
 
    const handleAddTask = () => {
        if(task.trim() !== '') {
            addTask(task);
            setTask('');
        }
    };

    return(

        <div>

            <input
                type="input"
                placeholder="Enter a task"
                value={task}
                onChange={handleInputChange}
            />

            <button onClick={handleAddTask}>Add Task</button>

        </div>

    );

};
export default TaskComponent;