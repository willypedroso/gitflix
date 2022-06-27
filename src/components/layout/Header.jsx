import React from "react";
import {Link} from 'react-router-dom'
import './Header.css'

export default props => {
    return (
        <div className="Header">
            <Link to='/'>
                <h1>GITFLIX</h1>
            </Link>
        </div>
    )
}