import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import React, {useState, useEffect} from 'react'
import AddTask from "./components/AddTask";

function App() {
    const [tasks, setTasks] = useState([]);
    const [formActive, setFormActive] = useState(false);
    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks();
            setTasks(tasksFromServer)

        };
        getTasks()
    }, []);

    const fetchTasks = async () => {
        const resp = await fetch('http://localhost:3004/tasks');
        return await resp.json();
    };

    const fetchTask = async (id) => {
        const resp = await fetch(`http://localhost:3004/tasks/${id}`);
        return await resp.json();
    };

    const deleteTask = async (id) => {

        await fetch(`http://localhost:3004/tasks/${id}`, {method: 'DELETE'});



        setTasks(tasks.filter(task => task.id !== id))
    };

    const toggleReminder = async (id) => {
        const taskToggle = await fetchTask(id);
        const updTask = {...taskToggle, reminder: !taskToggle.reminder};

        const res = await fetch(`http://localhost:3004/tasks/${id}`, {method: 'PUT', headers: {'Content-type': 'application/json'}, body: JSON.stringify(updTask)});
        const data = await res.json();
        console.log(data);


        setTasks(tasks.map(task => task.id === id ? {...task, reminder: data.reminder} : task))
    };

    const toggleFormActive = () => {
        setFormActive(!formActive)
    };

    const addTask = async (task) => {
        const res = await fetch(`http://localhost:3004/tasks/`, {method: 'POST', headers: {'Content-type': 'application/json'}, body: JSON.stringify(task)});

        const data = await res.json();

        setTasks([...tasks, data])


        /*let id = Date.now();
        const newTask = {...task, id};
        setTasks([...tasks, newTask]);
        setFormActive(false)*/
    };
    return (
        <div className="container">
            <Header toggleFormActive={toggleFormActive} formActive={formActive}/>
            {formActive && <AddTask addTask={addTask}/>}
            {tasks.length > 0 ?
                <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder}/> : 'No tasks yet.'}
            <Footer/>
        </div>
    );
}

export default App;
