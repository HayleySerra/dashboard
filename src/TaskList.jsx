import React, { useState } from 'react';

function TaskList ({ tasks }) {

    return(
        <div>
            <ul>
                {tasks.map((task, index) => (
                <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );

};
export default TaskList;