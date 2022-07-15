// // const Tasks = ({data}) => {
// //     // const data = [
// //     //     {
// //     //         "id": 1,
// //     //         "text": "Wake Up",
// //     //         "day": "Feb 3th 2019 at 06:30",
// //     //         "reminder" : true
// //     //     },
// //     //     {
// //     //         "id": 2,
// //     //         "text": "Breakfast",
// //     //         "day": "Feb 3th 2019 at 06:55",
// //     //         "reminder" : false
// //     //     },
// //     //     {
// //     //         "id": 3,
// //     //         "text": "Workup",
// //     //         "day": "Feb 3th 2019 at 07:30",
// //     //         "reminder" : true
// //     //     }
// //     // ];


    

// //     return (
// //         <>
// //         { data.map((data)=> 
// //             (<h3 key={data.id}>{data.text}</h3>) 
// //             )}
// //         </>
// //   )
// // }

// // export default Tasks

import Task from './Task';

const Tasks = ({data,onDelete,setData,onDoubleClick}) => {
  const rawData = data; 
  
  
  return (
    <>
    {data.map((data)=>{
      if(data.reminder){
        return(<Task key={data.id} reminder="reminder" task={data} onClick={onDelete} setTask={setData} rawData={rawData} onDoubleClick={onDoubleClick}/>)
    }
    else{
      return(<Task key={data.id} reminder=" " task={data} onClick={onDelete} setTask={setData} rawData={rawData} onDoubleClick={onDoubleClick}/>)
    }
  }
    
    )}
    </>
  )
}

export default Tasks