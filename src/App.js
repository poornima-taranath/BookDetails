import { useEffect,useState } from 'react';

import atom from './assests/atomopp.ico'
import './App.css';
import Card from './components/Card/Card';
import NavBar from './components/NavBar/NavBar';


function App() {

  const [bookDetails,setBookDetails] = useState([])


useEffect(()=>{
    try{
        
        fetch('https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep').then((res)=> res.json())
        .then( (res) => data(res.items) ) 
      }

    catch(err){
        console.log('Error------',err)
    }
},[])

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

 let handleBookDetailsSearch = (response) =>{
         setBookDetails(response)
 }

  return (
    <div className='main-container'>
      <NavBar/>
      <div className='information-screen'>
        <div className='logo-container'>
          
          <img src={atom} alt="logo"/>
          <span style={{fontWeight:'bold'}}> atom</span>

        </div>
        <div style={{fontWeight:'bold',marginLeft:'1em'}}>All Books</div>
        <Card bookDetails={bookDetails} handleBookDetailsSearch={handleBookDetailsSearch} />
      </div>
   
    </div>
  );
}

export default App;
