import PropTypes from 'prop-types'
import Task from "./Task";



const Tasks = ({tasks}) => {


    return (
        <>

                {tasks.map(task => <Task key={task.id} title={task.title}/>)}

        </>

    );
}


export default Tasks;