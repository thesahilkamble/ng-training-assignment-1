import React, { useState } from 'react';
import TaskList from './components/taskList';
import TaskForm from './components/taskForm';
import { addTask, deleteTask, updateTask } from './services/taskService';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  const handleAddOrUpdateTask = (task) => {
    if (task.id && tasks.some((t) => t.id === task.id)) {
      updateTask(task).then((updatedTask) =>
        setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)))
      );
    } else {
      addTask(task).then((newTask) => setTasks([...tasks, newTask]));
    }
    setCurrentTask(null);
  };

  const handleDeleteTask = (id) => {
    deleteTask(id).then(() => setTasks(tasks.filter((t) => t.id !== id)));
  };

  const handleEditTask = (task) => {
    setCurrentTask(task);
  };

  return (
    <div>
      <TaskForm onSubmit={handleAddOrUpdateTask} currentTask={currentTask} />
      <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} />
    </div>
  );
};

export default App;
