import PropTypes from 'prop-types'
import {TiDelete} from 'react-icons/ti'
import React from 'react'


const Task = ({date, id, title, reminder, deleteTask, toggleReminder}) => {
    return (
        <>
            <div className={reminder ? 'task reminder' : 'task'} onDoubleClick={() => toggleReminder(id)}><h3>{title}
                <TiDelete onClick={() => {
                    deleteTask(id)
                }} style={{color: 'red', cursor: 'pointer'}}/></h3>
                <p>{date}</p>
            </div>
        </>
    );
};


Task.defaultProps = {
    title: 'Your task should be here'
};

Task.propTypes = {
    title: PropTypes.string
};

export default Task;