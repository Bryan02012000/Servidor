import { useState, useEffect } from "react";
import axios from 'axios'
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";

function TaskList(){
    const [task, setTask]=useState([]);
    const [loading, setLoading]=useState(true);
    useEffect(()=>{
        axios.get('/tasks')
        .then(res=>{
            setTask(res.data);
            setLoading(false);
        })
        .catch(err=>{
            console.error('Error al consultas tasks: ', err);
            setLoading(false);
        });
    },[]);

    if(loading) return <p>Cargando tareas desde MongoDB...</p>

    const handleCreate = (newTask)=>{
        setTask([...task,newTask]);
    };

    const handleDelete = async (id)=>{
        await axios.delete('/tasks/'+id);
        setTask(task.filter(task => task._id !== id))
    }

    const handleUpdate = (updateTask) =>{
        setTask (task.map(t=>t._id ===updateTask._id ? updateTask:t));
    }

    return(
        <div>
            <h2>Lista de tareas</h2>
            <TaskForm onTaskCreated={handleCreate} />
            {task.length === 0 ? (<p>No hay tareas registradas en la BBDD</p>):(
                <ul style={{padding:'0'}}>
                    {task.map(task=>(
                        <TaskItem key={task._id} task={task} onDelete={handleDelete} onUpdate={handleUpdate}/>
                    ))}
                </ul>
            )}
        </div>

    );

}
export default TaskList;