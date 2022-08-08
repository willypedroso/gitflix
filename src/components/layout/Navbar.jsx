import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
/* import * as AiIcons from "react-icons/ai"; */
import { SidebarData } from "./SidebarData";
import './Navbar.css'

export function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <div className="navbar" onClick={showSidebar}>
            <Link to="#" className="menu-bars">
                <FaIcons.FaBars />
            </Link>
            <h1 style={{marginTop: '25px', marginLeft: '10px'}}>Menu</h1>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items">
                {/* <li className="navbar-toggle">
                    <Link to='#' className='menu-bars'>
                        <AiIcons.AiOutlineClose onClick={showSidebar}/>
                    </Link>
                </li> */}
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