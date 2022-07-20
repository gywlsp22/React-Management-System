import { useEffect, useState } from 'react';
import './App.css';
import Customer from './components/Customers';



function App() {
const [userList, setUserList]=useState(null);

useEffect(()=>{
  fetch("http://localhost:5000/api/user")
  .then((response)=> response.json())
  .then((data)=>setUserList(data));
},[])



  return (
    <div>
      {userList?.map(c => {
    return(
   <Customer 
   key={c.id}
   id={c.id}
   name={c.name}
   birthday={c.birthday}
   gender={c.gender}
   gob={c.gob}
   />
 
  
    )
  })
}
    
    </div>
  );
}

export default App;
