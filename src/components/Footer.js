import React from 'react'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div><Link to={'/about'}>about</Link></div>
            <div>Copyright © 2021 TaskTracker.</div>
        </footer>
    );
};



export default Footer;