import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, currentTask }) => {
  const [taskName, setTaskName] = useState('');

  useEffect(() => {
    if (currentTask) {
      setTaskName(currentTask.name);
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: currentTask?.id || Date.now(), name: taskName });
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task"
        required
      />
      <button type="submit">{currentTask ? 'Update' : 'Add'} Task</button>
    </form>
  );
};

export default TaskForm;
