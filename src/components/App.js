import { useState } from "react";
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";
import CategoryFilter from "./CategoryFilter";

const CATEGORIES = ["All", "Code", "Food", "Money", "Misc"];
const TASKS = [
  { text: "Buy rice", category: "Food" },
  { text: "Save a tenner", category: "Money" },
  { text: "Build a todo app", category: "Code" },
  { text: "Build todo API", category: "Code" },
  { text: "Get an ISA", category: "Money" },
  { text: "Cook rice", category: "Food" },
  { text: "Tidy house", category: "Misc" },
];

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDeleteTask(text) {
    setTasks(tasks.filter((task) => task.text !== text));
  }

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  const visibleTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={visibleTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
