import axios from 'axios';
import {useState} from 'react'
const API_URL = import.meta.env.VITE_API_URL || "https://api-tareas-rq8b.onrender.com";

function TaskItem({task, onDelete, onUpdate}){
    const [editing, setEditing] = useState(false);
    const [title, setTitle]=useState(task.titulo || task.title);
    const tareaCompletada = task.completada ?? task.done;


    const toggleDone = async ()=>{
        try{
            const {data} = await axios.put(API_URL+'/tasks/'+task._id,{done:!tareaCompletada});
            onUpdate(data);
        }catch(err){
            console.error('Error al actualizar los datos: '+err)
        }
    }

    const saveTitle = async ()=>{
        if(!title.trim()) return setEditing(false)
        try{
            const{data}=await axios.put(API_URL+'/tasks/'+task._id,{title})
            onUpdate(data);
            setEditing(false)
        }catch(err){
            console.error('error al actualizar título: ',err)
        }
    }

    return(
        <li style={{color:'white', fontSize:'20px'}}>
            <input type='checkbox' checked={tareaCompletada} onChange={toggleDone}/>
            <strong>Tarea: </strong>
            {editing ? (<input value={title} onChange={e => setTitle(e.target.value)} onBlur={saveTitle} 
            onKeyDown={e => e.key === 'Enter' && saveTitle()}/>) : (<span onClick={()=>setEditing(true)} 
            style={{margin:'8px', cursor:'pointer', textDecoration: tareaCompletada ? 'line-through':'none'}}>
                {task.title || task.titulo}
            </span>)}
            <button onClick={() => onDelete(task._id)} style={{ marginLeft: '10px', color: 'red' }}>
                Borrar
            </button>
            <br></br>
            {task.priority && (
                <span style={{color:"yellow"}}>
                    Prioridad: {task.priority}
                </span>
            )}
            <br></br>
            {task.user?.name && (
                <span style={{color:'red'}}>
                    Asignado a: {task.user.name}
                </span>
            )}
             <br></br>
            {task.user?.email && (
                <span style={{color:'green'}}>
                    Correo: {task.user.email}
                </span>
            )}

        </li>
    );

}

export default TaskItem;