import PropTypes from 'prop-types'




const Task = ({title}) => {


    return (
        <>
            <div className={'task'}>{title}</div>
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