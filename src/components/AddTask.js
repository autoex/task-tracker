import React, {useState} from 'react'

const AddTask = () => {

    const [task, setTask] = useState('');
    const [date, setDate] = useState('');
    const [reminder, setReminder] = useState(false);
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Task</label>
                <input type="text" placeholder={'Add Task'} value={task} onChange={(e)=> setTask(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day &amp; Time</label>
                <input type="text" placeholder={'Add Task'} value={date} onChange={(e)=> setDate(e.target.value)}/>
            </div>

            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type="checkbox" value={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)} />
            </div>

            <input type="submit" className='btn btn-block' value='Save Task'/>
        </form>
    );
}



export default AddTask;