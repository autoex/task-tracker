import React, {useState} from 'react'

const AddTask = ({addTask}) => {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [reminder, setReminder] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();
        if(!title || !date) {
            alert('Please input task and date');
            return
        }
        addTask({date, title, reminder});

        setDate('');
        setTitle('');
        setReminder(false);
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type="text" placeholder={'Add Task'} value={title} onChange={(e)=> setTitle(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day &amp; Time</label>
                <input type="text" placeholder={'Add Task'} value={date} onChange={(e)=> setDate(e.target.value)}/>
            </div>

            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type="checkbox" value={reminder} checked={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)} />
            </div>

            <input type="submit" className='btn btn-block' value='Save Task'/>
        </form>
    );
}



export default AddTask;