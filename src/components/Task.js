import PropTypes from 'prop-types'
import {TiDelete} from 'react-icons/ti'
import React from 'react'




const Task = ({userId, id, title, completed, deleteTask }) => {

    return (
        <>
            <div className={'task'}><h3>{title} <TiDelete onClick={()=> {deleteTask(id)}} style={{color: 'red', cursor:'pointer'}}/></h3>
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