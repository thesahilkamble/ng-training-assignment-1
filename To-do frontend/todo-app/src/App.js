import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import DeleteModal from './components/DeleteModal';
import './assets/css/styles.css';

function App() {
  return (
    <div className="App">
      <TaskList />
      <TaskForm />
      <DeleteModal />
    </div>
  );
}

export default App;