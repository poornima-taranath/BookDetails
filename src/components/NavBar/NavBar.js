import React from "react"

import './NavBar.css'
import menu from '../../assests/menu.ico'
import screen from '../../assests/screen.ico'
import tab from '../../assests/tablet-gadget.ico'

function NavBar(){
   
    return(
        <nav className="navbar-container">
            <div className="menu-option-box">
                <img src={menu} alt="logo" className="menu-icons"/>
                 <span className="option-name">Menu</span>
            </div>
            <div className="menu-option-box">
              <img src={screen} alt="screen"  className="menu-icons"/>
              <span className="option-name">Content Managment</span>
              
            </div>
            <div className="menu-option-box">
                <img src={tab} alt="tablet"  className="menu-icons"/>
                <span className="option-name">Courses</span>
               
            </div>
        </nav>
    )
}

export default React.memo(NavBar)
