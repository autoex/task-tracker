import PropTypes from 'prop-types'
import React from 'react'

const Footer = ({title}) => {
    return (
        <footer>
            {title}
        </footer>
    );
}

Footer.defaultProps = {
    title: 'Copyright © 2021 Facebook Inc.'
}

Footer.propTypes = {
     title: PropTypes.string
}

export default Footer;