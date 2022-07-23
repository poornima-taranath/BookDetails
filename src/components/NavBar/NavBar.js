import React, { useCallback, useState } from "react"
import {FaAngleDown} from "react-icons/fa";
import {FaListUl} from "react-icons/fa";
import './NavBar.css'
import menu from '../../assests/menu.ico'
import screen from '../../assests/screen.ico'
import tab from '../../assests/tablet-gadget.ico'

function NavBar(){
   
    const [toggle,setToggle]=useState(false)
    return(
        <nav className={toggle ?"navbar-container":"collapsed-navbar"}>
            <div className="menu-option-box">
                <img src={menu} alt="logo" className="menu-icons"/>
                 {toggle ? <span className="option-name">Menu</span> :null}
            </div>
            <div className="menu-option-box">
              <img src={screen} alt="screen"  className="menu-icons"/>
              {toggle ? <span className="option-name">Content Managment</span> :null}
              <FaAngleDown className="down-arrow-icon"/>
              
            </div>
            <div className="menu-option-box">
                <img src={tab} alt="tablet"  className="menu-icons"/>
               {toggle ?  <span className="option-name">Courses</span> :null }
            </div>
            <div className="collapse-icon">
                <FaListUl  onClick={()=>setToggle(!toggle)}/>
            </div>
        </nav>
    )
}

export default React.memo(NavBar)
