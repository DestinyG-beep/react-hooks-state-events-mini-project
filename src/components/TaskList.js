import React from "react";
import Task from "./Task"; // Import Task component

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks && tasks.length > 0 ? (
        tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDeleteTask} />
        ))
      ) : (
        <p>No tasks available</p> // Display a message if no tasks are available
      )}
    </div>
  );
}

export default TaskList;
