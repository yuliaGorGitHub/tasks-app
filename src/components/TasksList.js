import Task from "../models/Task";
import TaskCompnent from "./TaskComponent";
import "./TasksList.css";
import { useEffect, useState } from 'react';

function TasksList () {
    const [taskData, changeTaskData] = useState([]);
    const [readData, setReadData] = useState(true);
    const [input,setInput] = useState("");
    const [inputValue,setInputValue] = useState("");
     const [displayStatus, setDisplayStatus] = useState("all");
    
    const taskList = [ 
        new Task("buy milk", true),
        new Task("call to dad", false), 
        new Task("to do home work", false) ,
        new Task("feed the cat", true), 
        new Task("To water flowers",false)   
    ]

    useEffect(() => {
        changeTaskData(taskList);   
        setReadData(false);
      },[] );


    function editTaskStatus(id) 
    {
        const newStatus = !taskData[id].status;
        const newData = [... taskData];
        newData[id].status = newStatus;
        changeTaskData(newData);  
    }

    function deleteTheTask(id) 
    {
        const taskStatus = taskData[id].status;
        if (taskStatus)
        {
            const newData = [... taskData];
            let removed = newData.splice(id, 1)
            changeTaskData(newData);  
        }
    }

    function addNewTask(taskDescr) 
    {
        const newTask = new Task (taskDescr,false);
        changeTaskData(taskData.concat(newTask)); 
        setInput("");

    }

    function getNumberNotCompleted()
    {
        return taskData.reduce((counter, { status }) => status === false ? counter += 1 : counter, 0); 
    }

    function onKeyUp(e) {
        if (e.charCode === 13) {
            setInputValue(e.target.value);
            addNewTask(e.target.value);
        }
      }

    let displayTasks;
    if (!readData)
    { 
       displayTasks = taskData.map((curtask,index) => <TaskCompnent key={index} ind={index} show={displayStatus}
                             task={curtask} editStatus={editTaskStatus} deleteTask={deleteTheTask}/>);
    }
    else {
        <p>No data</p>
    }

    return (
        <>
            <div className="c-lst position-relative">
                <h1 style={{color : 'white'}}> Todos</h1>
                <input type="text" value={input} placeholder="What's next?" onChange={(e)=>setInput(e.target.value)} onKeyPress={e=>onKeyUp(e)}/>

                <div className="table">  
                    {displayTasks}
                </div>


                <div className="fix-buttom"><span className="space"> {getNumberNotCompleted()} items left </span>                
                    <input type="radio" value="all" name="dispTaskLst" checked={displayStatus === "all"} onChange={e=>setDisplayStatus(e.target.value)}/> All&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" value="active" name="dispTaskLst" checked={displayStatus === "active"} onChange={e=>setDisplayStatus(e.target.value)}/> Active&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" value="completed" name="dispTaskLst" checked={displayStatus === "completed"} onChange={e=>setDisplayStatus(e.target.value)}/> Completed
                </div>

            </div>


        </>
    )
};
export default TasksList; 
