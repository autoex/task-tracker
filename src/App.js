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
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
        },
        {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim ",
            "completed": false
        }
    ]);

    const deleteTask =(id)=> {
        // console.log('Id is: ', id)

        setTasks(tasks.filter(task=> task.id !== id))
    }
  return (
    <div className="container">
   <Header/>
   <Tasks tasks={tasks} deleteTask={deleteTask} />
   <Footer/>
    </div>
  );
}

export default App;
