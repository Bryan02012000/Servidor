import TaskList from "./components/TaskList";

function App(){
  return(
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>Gestor de taras</h1>
      <TaskList />

    </div>

  );
}

export default App;