import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const handleDeleteClick = () => {
    setShowConfirm(true); // Show the confirmation message
  };

  const confirmDelete = () => {
    deleteTodo(task.id); // Delete the task
    setShowConfirm(false); // Hide the confirmation message
  };

  const cancelDelete = () => {
    setShowConfirm(false); // Hide the confirmation message
  };
  return (
    <div className="Todo">
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
        <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={
          handleDeleteClick } />
        </div>
        {showConfirm && (
        <div className="confirm-box">
          <p>Are you sure you want to delete this task?</p>
          <button onClick={confirmDelete}>Yes</button>
          <button onClick={cancelDelete}>No</button>
        
        </div>
        )}
        </div>
   
  )
}