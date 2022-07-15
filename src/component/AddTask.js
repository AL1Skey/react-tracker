import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Button from './Button';
const AddTask = ({Close,tasks,setTask,parentId}) => {

  const [text,setText]= useState("");
  const [day,setDay]= useState("");
  const [reminder,setReminder]= useState(false);

  const id="AddTask";

  function onAdd(task){
    console.log(task);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id,...task};
    setTask([...tasks,newTask]);
  }

  function onSubmit(e){
    e.preventDefault();

    if(!text){
      alert("PLEASE FILL THE FORM!!")
      return
    }
    
    onAdd({text,day,reminder});

    setText('');
    setDay('');
    setReminder(false);

  }
  
  return (
    <form action="" id="AddTask" className="form-control "  onSubmit={onSubmit}>

        <div style={{display:"flex",marginBottom:"20px"}}>
          
          <h2>Add Task</h2>

          <FaTimes style={{fontSize:"28px",marginLeft:"auto",cursor:"pointer"}} onClick={()=>Close(id,parentId)}/>

        </div>

        <label htmlFor="task">Task</label>
       
        <input type="text" name="task" id="task" value={text} onChange={(e)=>setText(e.target.value)}/>
       
        <label htmlFor="date">Date</label>
       
        <input type="text" name="date" id="date" value={day} onChange={(e)=>setDay(e.target.value)} />
       
       <div className="form-control-check">
          <label htmlFor="reminder">Set Reminder</label>

          <input type="checkbox" name="reminder" id="reminder" value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
       </div>
       
       <Button class="submit" text="Submit" />

       
        
    </form>
  )
}

export default AddTask