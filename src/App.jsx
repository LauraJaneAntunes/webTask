import React, { useState } from "react"
import "./App.css"
import { v4 as uuidv4 } from "uuid"
import Tasks from './components/Tasks/Tasks';
import AddTask from './components/AddTask/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([
     
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map( task => {
      if (task.id === taskId) return { ...task, completed: !task.completed }

      return task;
    });

    setTasks(newTasks)
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
  
    setTasks(newTasks);
  };


  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks 
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
          />
      </div>
    </>
  );
}; 

export default App;
