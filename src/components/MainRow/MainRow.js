
import {FaPlus,FaSearch} from "react-icons/fa";

import './mainrow.css'

export default function MainRow ({debouncedSearch}){

    return(
    <div className="input-row-first">
                <div>
                    <FaSearch className="search-icon"/>
                     <input className="input-box-value" type="text" onChange={debouncedSearch} placeholder="Search by Title" aria-required="true" aria-label="text"/>
                </div>
               
                 <button className="create-book-btn"> 
                  <FaPlus style={{margin:'0 0.5em 0 0',}}/>
                   <div>Create New Book </div>
                 </button> 
           </div>
     )
    
};