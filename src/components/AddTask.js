import React from 'react'

const AddTask = () => {
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Task</label>
                <input type="text" placeholder={'Add Task'}/>
            </div>
            <div className='form-control'>
                <label>Day &amp; Time</label>
                <input type="text" placeholder={'Add Task'}/>
            </div>

            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type="checkbox" />
            </div>

            <input type="submit" className='btn btn-block' value='Save Task'/>
        </form>
    );
}



export default AddTask;