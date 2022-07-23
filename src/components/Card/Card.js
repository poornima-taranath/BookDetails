import { useEffect, useState } from "react";
import './Card.css'

import {FaPlus} from "react-icons/fa";

function Card({bookDetails}){


    const [selectedBook, setSelectedBook] = useState(null)

    function debounce(func, timeout = 200){
        let timer;
        return (...args) => {
          clearTimeout(timer);
          timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
      }

     function handleBookSearch (e){
          console.log(e.target.value)
          setSelectedBook(bookDetails.filter(ele => ele.volumeInfo.title.includes(e.target.value)))
    }

    const debouncedSearch = debounce((e)=>handleBookSearch(e))
   

    return(
        <div>
            <div className="input-row-first">
                <input className="input-box-value" type="text" onChange={(e) =>debouncedSearch(e)} placeholder="Search"/>
                 <button className="create-book-btn"> 
                  <FaPlus style={{margin:'0 0.5em 0 0',}}/>
                   <div>Create New Book </div>
                 </button> 
            </div>
           
             <div className="cards-grid">
                {bookDetails.map( book => {
                return(
                    <div className="card-container">
                      <span>Title - {book?.volumeInfo?.title} </span> 
                      <div>Authors - {book?.volumeInfo?.authors.map( author => author)}</div>
                      <div> Publisher - {book?.volumeInfo?.publisher}</div>  
                      <span> Published Date - {book?.volumeInfo?.publishedDate}</span>  
                     </div>
                )
            })}
            </div>
        </div>
    )
}

export default Card;