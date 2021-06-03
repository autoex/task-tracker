import PropTypes from 'prop-types'
import Task from "./Task";



const Tasks = ({tasks, deleteTask, toggleReminder}) => {


    return (
        <>

                {tasks.map(task => <Task key={task.id} {...task} deleteTask={deleteTask} toggleReminder={toggleReminder}/>)}

        </>

    );
};

Task.propTypes = {
    tasks: PropTypes.object
};
export default Tasks;