import React from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [isOpen, setIsOpen]= useState(false)
  const [text, setText]=useState("Show Task Bar")
  const [task, setTask]= useState();
  const url = "https://6351820a3e9fa1244e60840c.mockapi.io/api/tasks";

  const toggle=(e)=>{
    setIsOpen(!isOpen)
    const buttonText=isOpen ? "Show Task Bar" : "Hide Task Bar"
    setText(buttonText);
  }

  const getTask= async()=>{
    const {data}=await axios(url)
    setTask(data);
    console.log(data);
  }

  useEffect(() => {
    getTask()
  },[])
  return (
    <div>
      <Button
      onClick={(e)=>{toggle()}} variant="dark">{text}</Button>
      { isOpen && <AddTask/>}
      <TaskList task={task}/>
          
    </div>
  );
};

export default Home;
