import PropTypes from 'prop-types'



const Tasks = ({tasks}) => {


    return (
        <>
            <ul>
                {tasks.map(task => <li key={task.id}>{task.title}</li>)}
            </ul>
        </>

    );
}


export default Tasks;