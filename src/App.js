import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import React, {useState} from 'react'
import AddTask from "./components/AddTask";

function App() {
    const [tasks, setTasks] = useState([
        {
            "date": 'Feb 5th on 2:30pm',
            "id": 1,
            "title": "delectus aut autem",
            "reminder": false
        },
        {
            "date": 'Feb 6th on 4:30pm',
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "reminder": false
        },
        {
            "date": 'Feb 6th on 7:00pm',
            "id": 3,
            "title": "fugiat veniam minus",
            "reminder": false
        },
        {
            "date": 'Feb 7th on 2:00pm',
            "id": 4,
            "title": "et porro tempora",
            "reminder": true
        },
        {
            "date": 'Feb 7th on 2:30pm',
            "id": 5,
            "title": "laboriosam mollitia et enim ",
            "reminder": false
        }
    ]);
    const [formActive, setFormActive] = useState(true)

    const deleteTask =(id)=> {
        // console.log('Id is: ', id)

        setTasks(tasks.filter(task=> task.id !== id))
    }

    const toggleReminder = (id) => {
        console.log(id )
        setTasks(tasks.map(task=> task.id === id ? {...task, reminder: !task.reminder} : task) )
    }

    const toggleFormActive = () => {
        setFormActive(!formActive)
    }
  return (
    <div className="container">
   <Header toggleFormActive={toggleFormActive} formActive={formActive}/>
        {formActive && <AddTask/>}

        {tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder} /> : 'No tasks yet.'}

   <Footer/>
    </div>
  );
}

export default App;
