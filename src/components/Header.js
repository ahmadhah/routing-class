import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <h1>Welcome to Routing Practice Project</h1>
            <ul className="nav">
                <Link  className="menu" to="/">Home</Link>
                <Link className="menu" to="/about">About</Link>
                <Link  className="menu" to="/profile">Profile</Link>
            </ul>
        </div>
    )
}

export default Header
