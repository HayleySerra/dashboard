import React, { useState } from 'react';
/*import './TaskList.css';*/
import './styles.css';

function TaskList ({ tasks }) {
    const [isChecked, setIsChecked] = useState(new Array(tasks.length).fill(false));

    const handleCheckboxChange = (index) => {
      const newIsChecked = [...isChecked];
      newIsChecked[index] = !newIsChecked[index];
      setIsChecked(newIsChecked);
    };


    return(
        <div className="scrollable-box">
            <ul className="checkboxList">
            {tasks.map((task, index) => (
            <li key={index}>
              <label>
                <input
                  className="checkbox"
                  type="checkbox"

                  checked={isChecked[index]}
                  onChange={() => handleCheckboxChange(index)}
                />
                <span className={isChecked[index] ? 'strikethrough' : ''}>
                    {task}
                </span>
              </label>
            </li>
          ))}
          </ul>
        </div>
    );

};
export default TaskList;




