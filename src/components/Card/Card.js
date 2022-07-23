import { useEffect, useState } from "react";
import './Card.css'

import {FaPlus} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";

function Card({bookDetails,handleBookDetailsSearch}){


    const [initialList, setInitialList] = useState(bookDetails)

    useEffect(()=> setInitialList(bookDetails),[bookDetails])

    function debounce(func, timeout = 200){
        let timer;
        return (...args) => {
          clearTimeout(timer);
          timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
      }


     let handleBookSearch = (e) =>{
       
        console.log(bookDetails)
        let res;
        console.log(e.target.value == '', e.target.key)
        if(e.target.value !== '' ){
        // res = (bookDetails.map(obj => obj)).filter((ele) => ele.title.toLowerCase().includes(e.target.value))
        res = bookDetails.filter((ele) => ele.title.toLowerCase().includes(e.target.value))
        console.log(res)
        handleBookDetailsSearch(res)
        }
        else{      
            handleBookDetailsSearch(initialList)
        }
       }
    

    const debouncedSearch = debounce((e)=>handleBookSearch(e))
   

    return(
        <div>
            <div className="input-row-first">
                <div>
                     <input className="input-box-value" type="text" onChange={handleBookSearch} placeholder="Search"/>
                     <FaSearch/>
                </div>
               
                 <button className="create-book-btn"> 
                  <FaPlus style={{margin:'0 0.5em 0 0',}}/>
                   <div>Create New Book </div>
                 </button> 
            </div>
           
             <div className="cards-grid">
             {bookDetails.map( book => {
                return(
                    <div className="card-container" key={book?.accessInfo?.id}>
                      <div>Title - {book?.title} </div> 
                      <div>Authors - {book?.authors}</div>
                      <div> Publisher - {book?.publisher}</div>  
                      <div> Published Date - {book?.publishedDate}</div>  
                     </div>
                )
            })}
            </div>
        </div>
    )
}

export default Card;