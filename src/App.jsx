import { useEffect, useState } from 'react'
import './App.css'
import UsersList from './UsersList'
import UsersForm from './UsersForm'
import axios from 'axios'
function App() {
 
  const [usersList, setUsersList] = useState([]);
  const [userSelected, setUserSelected] = useState(null);
  const [userDeleted, setUserDeleted] = useState(null);

  useEffect(()=>{
    axios
    .get('https://users-crud1.herokuapp.com/users/')
    .then((res)=> setUsersList(res.data))
  },[])

  const getUsers = () =>{
    axios
    .get('https://users-crud1.herokuapp.com/users/')
    .then((res)=> setUsersList(res.data))
  }

  const selectUser = (user)=>{
    setUserSelected(user)
  }

  
  const deleteUser = (id) => {
    axios
    .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(() => getUsers());
  }

  const deselectUser = () => setUserSelected(null);
  return (
    <div className="App">
      <UsersForm 
      getUsers={getUsers}
      userSelected={userSelected}
      deselectUser={deselectUser}
      />
      <UsersList 
      usersList={usersList}
      selectUser={selectUser}
      deleteUser={deleteUser}
      />
      
    </div>
  )
}

export default App
