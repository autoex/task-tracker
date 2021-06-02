import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import React, {useState} from 'react'

function App() {
    const [tasks, setTasks] = useState([
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "reminder": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "reminder": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "reminder": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "reminder": true
        },
        {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim ",
            "reminder": false
        }
    ]);

    const deleteTask =(id)=> {
        // console.log('Id is: ', id)

        setTasks(tasks.filter(task=> task.id !== id))
    }

    const toggleReminder = (id) => {
        console.log(id )
        setTasks(tasks.map(task=> task.id === id ? {...task, reminder: !task.reminder} : task) )
    }
  return (
    <div className="container">
   <Header/>
        {tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder} /> : 'No tasks yet.'}

   <Footer/>
    </div>
  );
}

export default App;
