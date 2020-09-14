import React from 'react'
import logo from "../images/logo.jpeg"
import { FaAlignRight } from "react-icons/fa"
import Links from "../constants/links"

const Navbar = ({toggleSidebar}) => {
    return (
        <nav className="navbar">
            <div className="nav-center">
            <div className="nav-header">
                <img className="logo" src={logo} alt="logo" />
                <button className="toggle-btn" onClick={toggleSidebar}>
                <FaAlignRight />
                </button>
            </div>
            <Links styleClass="nav-links" />
            </div>
        </nav>
    )
}

export default Navbar

