import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "./SidebarData";
import './Navbar.css'

export function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    
    const showSidebar = () => {
        setSidebar(!sidebar);
        window.scrollTo(0);
    };

    return (
        <>
        <div className="navbar" onClick={showSidebar}>
            <Link to="#" className="menu-bars">
                {sidebar ? <FaIcons.FaWindowClose /> : <FaIcons.FaBars />}
            </Link>
            <h1 style={{marginTop: '25px', marginLeft: '10px'}}>{sidebar ? "Close Menu" : "Menu"}</h1>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items">
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path} onClick={showSidebar}>
                                {item.icon} <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </>
    )
}