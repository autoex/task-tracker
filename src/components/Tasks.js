import PropTypes from 'prop-types'
import Task from "./Task";



const Tasks = ({tasks}) => {


    return (
        <>

                {tasks.map(task => <Task key={task.id} {...task}/>)}

        </>

    );
}

Task.propTypes = {
    tasks: PropTypes.object
}
export default Tasks;