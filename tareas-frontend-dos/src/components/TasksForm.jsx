import { useState } from 'react';
import axios from 'axios';

function TaskForm({ onTaskCreated }){
    const [title, setTitle] = useState('');
    const [priority, setPriority]=useState('medium');

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const {data} = await axios.post('/tasks', {title,priority});
        onTaskCreated(data);
        setTitle('');
    }

    return(
        <form onSubmit={handleSubmit} style={{marginBottom:'20px'}}>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder='Nueva tarea' />
            <select value={priority} onChange={e=>setPriority(e.target.value)}>
                <option value={"low"}>Low</option>
                <option value={"medium"}>Medium</option>
                <option value={"high"}>High</option>
            </select>
            <button type="submit">Agregar</button>
        </form>

    );

}
export default TaskForm;