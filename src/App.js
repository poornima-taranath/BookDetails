import { useEffect,useState } from 'react';

import atom from './assests/atomopp.ico'
import './App.css';
import Card from './components/Card/Card';
import NavBar from './components/NavBar/NavBar';


function App() {

  const [bookDetails,setBookDetails] = useState([])

useEffect(()=>{
    try{
        fetch('https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep').then((res)=> res.json() ).then( (res) => setBookDetails(res.items))
    }
    catch(err){
        console.log('Error------',err)
    }
},[])

  return (
    <div className='main-container'>
      <NavBar/>
      <div className='information-screen'>
        <div className='logo-container'>
          
          <img src={atom} alt="logo"/>
          <span style={{fontWeight:'bold'}}> atom</span>

        </div>
        <div style={{fontWeight:'bold',marginLeft:'1em'}}>All Books</div>
        <Card bookDetails={bookDetails}/>
      </div>
   
    </div>
  );
}

export default App;
