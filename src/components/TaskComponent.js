
import "./TaskComponent.css"
import React from 'react'
import {  useState } from 'react';
import Modal from './Modal.js';


function TaskCompnent (props)
{
    const {task, ind, editStatus, deleteTask, show} = props;
    const [showModal, setShowModal] = useState(false);
    
    function showHideBySelect ()
    {
        if (show === "all")
            return "c-task c-row display-block";
        else if (show === "completed" && task.status === true)
            return "c-task c-row display-block";
        
        else if (show === "active" && task.status === false)
            return "c-task c-row display-block";
        else 
            return "c-task c-row display-none";

    }
    const showHideClassName = showHideBySelect();

    let myStyle;
    (task.status) ? myStyle = {color: '#B9B7BD', textDecoration: 'line-through' } : myStyle = {color: 'black'} 

    function handleModal ()
    {
        if (task.status) 
            deleteTask(ind);  
        else  
            setShowModal(!showModal);       
    }

    return (
        <div className={showHideClassName}  name={ind}>
            <input type="checkbox" checked={task.status} onClick={() => editStatus(ind)}></input>
            <p style={myStyle}>{task.task}</p>
            <div className="click" onClick={handleModal}>x</div>
            <Modal show={showModal} handleClose={() => setShowModal(!showModal)}  children="Uncompleted task cannot be deleted"/>
        </div>
    )
}
export default TaskCompnent;