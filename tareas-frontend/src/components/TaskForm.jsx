import axios from 'axios'
import {useState} from 'react'
function TaskForm({onTaskCreated}){
    const [title, setTitle]=useState('');
    const [email, setEmail]=useState('');
    const [priority, setPriority]=useState('medium');
    
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const {data} = await axios.post("/tasks", {title, email, priority})
        onTaskCreated(data);
        setTitle('');
        setEmail('');
    }

    return(
        <form onSubmit={handleSubmit} style={{marginBottom:"20px"}}>
            <input value={title} onChange={e=>setTitle(e.target.value)} placeholder='Escribe título'/>
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder='Escribe correo'/>
            <select value={priority} onChange={e=>setPriority(e.target.value)}>
                <option value={"low"}>low</option>
                <option value={"medium"}>medium</option>
                <option value={"high"}>high</option>
            </select>
            <button type="submit">Agregar</button>
        </form>
    );

}
export default TaskForm;