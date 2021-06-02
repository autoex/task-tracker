import PropTypes from 'prop-types'
import {TiDelete} from 'react-icons/ti'




const Task = ({userId, id, title, completed }) => {
    return (
        <>
            <div className={'task'}><h3>{title} <TiDelete/></h3>
           </div>
        </>

    );
}


Task.defaultProps = {
    title: 'Your task should be here'
}

Task.propTypes = {
        title: PropTypes.string
}

export default Task;