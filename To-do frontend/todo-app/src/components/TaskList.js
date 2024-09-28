import React from 'react';


function TaskList() {
  return (
    <table className="task-table">
      <thead>
        <tr>
          <th>Assigned To</th>
          <th>Status</th>
          <th>Due Date</th>
          <th>Priority</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>User 1</td>
          <td>Completed</td>
          <td>12/10/2024</td>
          <td>Low</td>
          <td>This task is good</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TaskList;