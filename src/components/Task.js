import React from "react";

function Task({ task, onDelete }) {
  const { text, category, id } = task; // Destructure the task object

  const handleDelete = () => {
    onDelete(id); // Call the onDelete function with the task's ID
  };

  return (
    <div className="task">
      <div className="label">{category}</div> {/* Display the task's category */}
      <div className="text">{text}</div> {/* Display the task's text */}
      <button className="delete" onClick={handleDelete}>X</button> {/* Handle delete */}
    </div>
  );
}

export default Task;
