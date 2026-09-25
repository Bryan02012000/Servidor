import {useState} from 'react';
import axios from 'axios';

function TaskItem({task, onDelete, onUpdate}){
    const [editing, setEditing] = useState(false);
    const [title, setTitle]=useState(task.title || task.titulo);
    const estaCompletada = task.completada ?? task.done;//Por si se puso en la bbdd como completada o como done
    const tituloTarea = task.titulo || task.title;//Por si se puso en la bbdd como titulo o como title

    const toggleDone = async()=>{
        try{
            const{data}=await axios.put('/tasks/'+task._id,{done:!estaCompletada});
            onUpdate(data);
        }catch(err){
            console.error("Error al actualizar datos: "+err)
        }
    }

    const saveTitle = async()=>{
        if(!title.trim()) return setEditing(false);
        try{
            const{data}=await axios.put('/tasks/'+task._id,{title});
            onUpdate(data);
            setEditing(false);
        }catch(err){
            console.error('Error al actualizar datos: '+err);
        }
    }

    return(
        <li style={{listStyle:'none', marginBottom:'12px', padding:'10px', borderBottom:'1px solid #ccc'}}>
            <input type='checkbox' checked={estaCompletada} onChange={toggleDone}/>
            {editing ? (<input value={title} onChange={e=>setTitle(e.target.value)} onBlur={saveTitle} 
            onKeyDown={e => e.key === 'Enter' && saveTitle()} autoFocus style={{marginLeft:'8px'}}/>) : (<span onClick={()=>setEditing(true)}
            style={{margin:'8px', cursor:'pointer', textDecoration: estaCompletada ? 'line-through':'none'}}>
                {task.title || task.titulo}
            </span>)}
            <button onClick={()=>onDelete(task._id)} style={{marginLeft:'10px', color:'red'}}>
                🗑️
            </button>
            {task.priority && <span> - {task.priority}</span>}
            {task.user?.name && (
                <div style={{fontSize:'0.85em', color:'red', marginTop:'4px'}}>
                    👤 {task.user.name}
                </div>
            )}
            {task.user?.email && (
                <div style={{fontSize:'0.85em', color:'yellow', marginTop:'4px'}}>
                    correo: {task.user.email}
                </div>
            )}
            
        </li>
    );
}

export default TaskItem;