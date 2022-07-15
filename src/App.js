import React from 'react';
import Header from './component/Header';
// import Task from './component/Task';
import Tasks from './component/Tasks';
import { useState } from 'react';//REACT HOOKS API
import AddTask from './component/AddTask';
import * as Event from './component/event'

const App = ()=> {
  const[tasks,setTask] = useState([
    {
        "id": 1,
        "text": "Wake Up",
        "day": "Feb 3th 2019 at 06:30",
        "reminder" : true
    },
    {
        "id": 2,
        "text": "Breakfast",
        "day": "Feb 3th 2019 at 06:55",
        "reminder" : false
    },
    {
        "id": 3,
        "text": "Workup",
        "day": "Feb 3th 2019 at 07:30",
        "reminder" : true
    }
]);
  
  return (
    // PARENT ELEMENT CAN LIKE THIS
    <div className="container">
      <Header onClick={Event.ToggleShow} parentId="addContainer" id="AddTask"/>
      
      <div id="addContainer">
        <AddTask Close={Event.Close} parentId={"addContainer"} tasks={tasks} setTask={setTask} />
      </div>
      
      <div className="add-form">
        <Tasks data={tasks} onDelete={Event.Delete} setData={setTask} onDoubleClick={Event.Reminder}/>
        {/* {
          <>
          {tasks.map((data)=>(
              <Task key={data.id} task={data} onClick={Event.Delete} setTask={setTask} rawData={tasks} onDoubleClick={Event.Reminder}/>
          ))}
          </>
        } */}
      </div>
 
    </div>

    // OR LIKE THIS
    // <>
    //   <h1>Hello MM</h1>
    // </>  //THIS WILL RETURN WITHOUT ANY PARENT
 

    // <h2>Har har har</h2> ERROR OCCURED BECAUSE ONLY ONE PARENT ELEMENT ALLOWED IN RETURN VALUE

    
  );
}

// //REACT APP CLASS BASED COMPONENT
// class App extends React.Component{
//   render(){
//       return <h1>Hello from class</h1>
//   }
// }

export default App;
