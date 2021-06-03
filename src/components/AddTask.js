import React, {useState} from 'react'

const AddTask = ({addTask}) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [reminder, setReminder] = useState(false);
    const [missedData, setMissedData] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();
        if (!title || !date) {
            setMissedData(true);
            return
        }
        addTask({date, title, reminder});
        setDate('');
        setTitle('');
        setReminder(false);
        setMissedData(false);
    };
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input className={missedData ? 'input-error': undefined} type="text" placeholder={'Add Task'} value={title} onChange={(e) => setTitle(e.target.value)}/>
                {missedData && <div className="error-message">Please input task</div>}
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input className={missedData ? 'input-error' : undefined} type="date" placeholder={'Add Task'} value={date} onChange={(e) => setDate(e.target.value)}/>
                {missedData && <div className="error-message">Please input data</div>}
            </div>

            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type="checkbox" value={reminder} checked={reminder}
                       onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type="submit" className='btn btn-block' value='Save Task'/>
        </form>
    );
};

export default AddTask;