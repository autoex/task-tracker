import PropTypes from 'prop-types'
import React from 'react'
import Button from "./Button";

const Header = ({title, toggleFormActive, formActive}) => {

    return (
        <header className={'header'}>
            <h1>{title}</h1>
            <Button text={'Add'} style={'btn'} color={'green'} toggleFormActive={toggleFormActive} formActive={formActive}   />
        </header>
    );
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
     title: PropTypes.string
}

export default Header;