import React from "react"

import './NavBar.css'
import menu from '../../assests/menu.ico'
import screen from '../../assests/screen.ico'
import tab from '../../assests/tablet-gadget.ico'

function NavBar(){
   
    return(
        <div className="navbar-container">
            <div className="menu-option-box">
                <img src={menu} alt="logo"/>
                 <span className="option-name">Menu</span>
            </div>
            <div className="menu-option-box">
              <img src={screen} alt="screen"/>
              <span className="option-name">Content Managment</span>
              
            </div>
            <div className="menu-option-box">
                <img src={tab} alt="tablet"/>
                <span className="option-name">Courses</span>
               
            </div>
        </div>
    )
}

export default React.memo(NavBar)
