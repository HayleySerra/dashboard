import React, { useState } from 'react';
import './TaskList.css';

function TaskList ({ tasks }) {

    return(
        <div className="scrollable-div">
            <ul className="checkboxList">
            {tasks.map((task, index) => (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                />
                {task}
              </label>
            </li>
          ))}
          </ul>
        </div>
    );

};
export default TaskList;




