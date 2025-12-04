import { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[1]); 

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="taskDetails">Details</label>
        <input
          id="taskDetails"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="taskCategory">Category</label>
        <select
          id="taskCategory"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
