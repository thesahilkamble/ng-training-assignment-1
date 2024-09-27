import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete }) => {
return(
    <div>
    <h2>
        Task List
        </h2>
        <ul>
            {tasks.map((task) => ( 
                <li key={task.id}>
                    {task.title}
                    <button onClick={() => onEdit(task.id)}>Edit</button>
                    <button onClick={() => onDelete(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
        </div>
);
};

export default TaskList;