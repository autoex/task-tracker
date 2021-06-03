import PropTypes from 'prop-types'
import React from 'react'

const Button = ({text, style, color, toggleFormActive, formActive}) => {
    return <button style={formActive ? {backgroundColor: 'red'} : {backgroundColor: color}} className={style} onClick={toggleFormActive}>{formActive ? 'Close' : text}</button>

}

Button.defaultProps = {
    text: 'Ok'
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;