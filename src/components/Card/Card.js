import { useEffect, useState } from "react";
import './Card.css'

import {FaPlus} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";

function Card(){

    const [bookDetails,setBookDetails] = useState([])

  
    useEffect(()=>
       fetchBookDetails() 
    ,[])

    let fetchBookDetails = () => {
       try{
            
            fetch('https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep').then((res)=> res.json())
            .then( (res) => data(res.items) ) 
          }
    
        catch(err){
            console.log('Error------',err)
        }
     }
    
    function data(res)
    {
        let data =  res.map(ele =>   { return ({
        title:ele.volumeInfo.title,
        authors:ele.volumeInfo.authors,
        publisher:ele.volumeInfo.publisher,
        publishedDate:ele.volumeInfo.publishedDate,
        id:ele.id
      })})

      setBookDetails(data)
    
    }
    
  

    function debounce(func, timeout = 200){
        let timer;
        return (...args) => {
          clearTimeout(timer);
          timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
      }


     let handleBookSearch = (e) =>{
       
        let res;
        console.log(e.target.value == '', e.target.key)
        if(e.target.value !== '' ){
        // res = (bookDetails.map(obj => obj)).filter((ele) => ele.title.toLowerCase().includes(e.target.value))
        res = bookDetails.filter((ele) => ele.title.toLowerCase().includes(e.target.value))
        console.log(res)
        handleBookDetailsSearch(res)
        }
        else{      
            fetchBookDetails()
        }
       }

       let handleBookDetailsSearch = (response) =>{
        setBookDetails(response)
       }
    

       const debouncedSearch = debounce((e)=>handleBookSearch(e))
   

    return(
        <div>
            <div className="input-row-first">
                <div>
                     <input className="input-box-value" type="text" onChange={debouncedSearch} placeholder="Search by Title"/>
                    
                </div>
               
                 <button className="create-book-btn"> 
                  <FaPlus style={{margin:'0 0.5em 0 0',}}/>
                   <div>Create New Book </div>
                 </button> 
            </div>
           
             <div className="cards-grid">
             {bookDetails.length > 0? bookDetails.map( book => {
                return(
                    <div className="card-container" key={book?.accessInfo?.id}>
                      <div>Title - {book?.title? book.title : 'Not Available'} </div> 
                      <div>Authors - {book?.authors? book.authors.map(name => name):'Not Available'}</div>
                      <div> Publisher - {book?.publisher? book.publisher : "Not Available"}</div>  
                      <div> Published Date - {book?.publishedDate ? book.publishedDate : "Not Avaliable"}</div>  
                     </div>
                )
            }): "No Results found"}
            </div>
        </div>
    )
}

export default Card;