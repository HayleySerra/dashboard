import React, { useState } from 'react';

function BigBoyComponent(){
    const [task, setTask] = useState('');
    const [storedValues, setStoredValues] = useState([]);

    const handleInputChange = (e) =>{
        setTask(e.target.value);
    };

    const handleAddTask = () => {
        if (task.trim() != ''){
            setStoredValues([...storedValues, task]);
            setInputValue('');
        }
    };

    return(
        <div>
            <input
                type="text"
                placeholder="Enter something..."
                value={task}
                onChange={handleInputChange}
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {storedValues.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
        </div>


    );
};

export default BigBoyComponent;
