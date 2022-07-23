import { useEffect } from "react";
import './Card.css'

function Card({bookDetails}){
   

    return(
        <div>
            <div className="input-row-first">
                <input/>
                 <button> Create New Book</button> 
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