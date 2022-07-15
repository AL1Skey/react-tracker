import $ from 'jquery';

export const Add = (task) =>{
    // e.preventDefault();
    console.log('Add');
}
export const Del = (e) =>{
    // e.preventDefault();
}

export const Close = (task,parent) => {
    // e.preventDefault();
    console.log("CLOSE",task);

    $(`#${task}`).slideUp(500,null,function(){
        $(`#${parent}`).hide();
        console.log("parent",parent)
    });

}
export const Delete = (rawData,state,taskId) => {
    console.log("Delete",taskId,"rawData",rawData,"State",state);

    state(rawData.filter((task) => task["id"] !== taskId));//UPDATE AND RETURN NEW TASK WHERE TASK ID NOT EQUAL TO PARAMETER ID 
}
export const ToggleShow = (parentId,id) => {
    // e.preventDefault();
    
    $(`#${parentId}`).toggle(50,null,function(){
        $(`#${id}`).slideDown(500)
    });

}
export const Reminder = (data,state,database) => {
    if(data.reminder){
        //THIS FUNCTION
        state(database.map( (obj)=> obj.id === data.id ? {...obj,reminder:!obj.reminder}:obj
        ));
        console.log("reminder ",data["reminder"],"state",state,"database",database);
    }
    else{
        // state({"reminder":false})
        //SAME AS THIS
        state(database.map( (obj)=>{
            if(obj["id"] === data["id"]){
                obj["reminder"] = true;
            }
            return obj;
        }
        ))
        console.log(data.reminder);
    }
}