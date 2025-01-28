import { useEffect, useState } from 'react';
import './App.css';
import UserList from './UserList';
import axios from 'axios';
import './UserList.css'

function App() {
const [users , setUsers] = useState([]);
useEffect(()=> {
  axios.get("https://jsonplaceholder.typicode.com/users").then ((result) =>
  {
setUsers(result.data)
  })
},[])

  return (
    <div className="App">
      {users.map((user)=>(<UserList user={user}/>))}
      
    </div>
  );
}

export default App;
