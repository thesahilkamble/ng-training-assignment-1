// Example task service for API calls

export const taskService = {
  getTasks() {
    // Example of API call to get tasks
    return fetch('/api/tasks')
      .then(response => response.json());
  },

  addTask(task) {
    // Example of API call to add a new task
    return fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
  }
};