import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  // State to store the form values
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState(categories[0] || "All"); // Default to the first category

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submit behavior

    if (taskText.trim() && taskCategory) {
      // Create a new task object and pass it to the parent component
      const newTask = {
        text: taskText,
        category: taskCategory,
      };
      onTaskFormSubmit(newTask); // Call the callback with the new task
      setTaskText(""); // Reset the form inputs
      setTaskCategory(categories[0] || "All"); // Reset to the first category
    }
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)} // Update task text on input change
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={taskCategory}
          onChange={(e) => setTaskCategory(e.target.value)} // Update category on change
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
