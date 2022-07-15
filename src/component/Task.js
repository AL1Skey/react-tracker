import {FaTimes} from 'react-icons/fa'

const Task = ({task,onClick,setTask,rawData,onDoubleClick,reminder}) => {
  return (
    <div className={`task ${reminder}`} id={task.id} onDoubleClick={()=>{onDoubleClick(task,setTask,rawData)}}>
        <h3>{task.text}
        <FaTimes
          style={{color:'red',cursor:'pointer'}}
          onClick={()=>onClick(rawData,setTask,task.id)}
        />
        </h3>
        <p>{task.day}</p>
        
    </div>
  )
}

export default Task