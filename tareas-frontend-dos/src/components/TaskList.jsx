import { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import TaskForm from "./TasksForm";
import axios from "axios"
const API_URL = import.meta.env.VITE_API_URL;

function TaskList(){
    const [loading, setLoading] = useState(true);
    const [task, setTask] = useState([]);

    useEffect(()=>{
        axios.get(API_URL+'/tasks')
        .then((res)=>{
            setTask(res.data);
            setLoading(false);
        })
        .catch(err=>{
            console.error("Error al consultar task: ", err);
            setLoading(false);
        })
    },[]);

    if(loading) return <p>Cargando tareas desde mongoDB</p>

    const handleCreate = (newTask) => {
        setTask([...task, newTask]); 
    };

    const handleDelete = async (id) => {
        await axios.delete(`${API_URL}/tasks/${id}`); 
        setTask(task.filter(t => t._id !== id)); 
    };

    const handleUpdate = (updateTask) =>{
        setTask(task.map(t=>t._id ===updateTask._id ? updateTask:t))
    }
    
    return (
        <div>
            <h2>LISTA DE TAREAS</h2>
            <TaskForm onTaskCreated={handleCreate}/>
            {task.length === 0 ? (<p>No hay tareas registradas</p>):
            <ul>
                {task.map(task=>(
                    <TaskItem key={task._id} task={task} onDelete={handleDelete} onUpdate={handleUpdate}/>
                ))}
            </ul>}
        </div>
    )
}

export default TaskList;