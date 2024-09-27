import React from 'react';
import './TaskForm.css';

function TaskForm() {
  return (
    <div className="task-form">
      <h2>New Task</h2>
      <form>
        <label>
          Assigned To:
          <input type="text" name="assignedTo" />
        </label>
        <label>
          Status:
          <select name="status">
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </label>
        <label>
          Due Date:
          <input type="date" name="dueDate" />
        </label>
        <label>
          Priority:
          <select name="priority">
            <option value="Low">Low</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
          </select>
        </label>
        <label>
          Description:
          <textarea name="description"></textarea>
        </label>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </form>
    </div>
  );
}

export default TaskForm;