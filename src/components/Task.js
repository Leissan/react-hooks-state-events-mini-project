import React from "react";

function Task({task, handleDelete}) {

  function handleClick(e) {
   // e.target.parentElement.remove() // parent element is the whole div elemnt - one quick way to delete stuff
    
  }

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button onClick={()=> handleDelete(task.text)} className="delete">X</button> 
    </div>
  );
}
//using task.text in handleDelete to identify the actual task
export default Task;
