import PropTypes from 'prop-types'
import React from 'react'
import Button from "./Button";
import {useLocation} from 'react-router-dom'

const Header = ({title, toggleFormActive, formActive}) => {
    const location = useLocation();
    return (
        <header className={'header'}>
            <h1>{title}</h1>
            {location.pathname === '/' &&
            <Button text={'Add'} styleName={'btn'} color={'green'} toggleFormActive={toggleFormActive}
                    formActive={formActive}/>}
        </header>
    );
};

Header.defaultProps = {
    title: 'Task Tracker'
};

Header.propTypes = {
    title: PropTypes.string
};

export default Header;