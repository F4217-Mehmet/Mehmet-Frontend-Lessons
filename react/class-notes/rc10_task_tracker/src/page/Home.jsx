import React from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "..components/button/Button"

const Home = () => {
  return (
    <div>
      Home
      <AddTask />
      <TaskList />
    </div>
  );
};

export default Home;
