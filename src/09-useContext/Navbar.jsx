import React from 'react'
import {Link, NavLink} from "react-router-dom";



export const Navbar = () => {
    return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
                <div className="container fluid">

                <Link className="navbar-brand" to="/">useContext</Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        <NavLink
                            className={({isActive })  => `nav-link ${isActive ? 'active' : ''}`}
                            to="/">
                            Home
                        </NavLink>

                        <NavLink
                            className={({isActive })  => `nav-link ${isActive ? 'active' : ''}`}
                            to="/about">
                            About
                        </NavLink>

                        <NavLink
                            className={({isActive })  => `nav-link ${isActive ? 'active' : ''}`}
                            to="/Login">
                            Login
                        </NavLink>

                        <li className="nav-item ">
                            <a className="nav-link active" href="#">Features</a>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
    )
}
