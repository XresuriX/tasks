import { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import Tasks from "./components/tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "lorem",
      day: "Feb 5th at 2pm",
      reminder: true
    },
    {
      id: 2,
      text: "all will be well",
      day: "Feb 5th at 3pm",
      reminder: true
    },
    {
      id: 3,
      text: "we getting there",
      day: "december 18",
      reminder: true
    }
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};
export default App;
