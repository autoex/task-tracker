import PropTypes from 'prop-types'
import Task from "./Task";



const Tasks = ({tasks, deleteTask}) => {


    return (
        <>

                {tasks.map(task => <Task key={task.id} {...task} deleteTask={deleteTask}/>)}

        </>

    );
}

Task.propTypes = {
    tasks: PropTypes.object
}
export default Tasks;