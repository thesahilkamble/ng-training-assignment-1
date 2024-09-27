import React from 'react';
import './DeleteModal.css';

function DeleteModal() {
  return (
    <div className="delete-modal">
      <h2>Delete</h2>
      <p>Do you want to delete this task?</p>
      <button>No</button>
      <button>Yes</button>
    </div>
  );
}

export default DeleteModal;