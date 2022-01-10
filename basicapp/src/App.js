import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import UserList from './UserList';
import { useState } from 'react';
import { Suspense } from 'react/cjs/react.production.min';
import { BrowserRouter as Router } from "react-router-dom";
import UserProfile from './UserProfile';

const users = [
  { id: '0', firstName: 'James', lastName: 'Sun', userName: 'jamessun', emailAddress: 'jamessun@gmail' }, 
  { id: '1', firstName: 'Michael', lastName: 'Enferadi', userName: 'michaelenferadi', emailAddress: 'michaelenferadi@gmail' }, 
  { id: '2', firstName: 'Crystal', lastName: 'Yang', userName: 'crystalyang', emailAddress: 'crystalyang@aol.com'}, 
  { id: '3', firstName: 'Allie', lastName: 'Scott', userName: 'alliescott', emailAddress: 'alliescott@yahoo.com'},
];

const filterUsernames = (users, query) => {
  if(!query){
    console.log("invalid query, won't filter");
    return users;
  }

  return users.filter((user) => {
    console.log("Query is: " + query);

    const username = user.userName.toLowerCase();
    return username.includes(query);
  });
};

function App() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredUsers = filterUsernames(users, searchQuery);

  if(!query){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
        <div>
            <SearchBar 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <h4>List of Users</h4>
            <hr />
            <UserList
              users={filteredUsers}
            />

        </div>
  
        </header>
      </div>
    );
  }
}

function HomePage(props){
  return(
    <div className='SearchTitle'>
      <h1>Search User</h1>
      <div className='SearchBar'>
          
      </div>
    </div>
  );
}

/*function UserProfile(props){
  return(
    <div className='UserProfile'>
      <div className='Name'>
        <h1>Name: First Last</h1>
      </div>
      <div className='Username'>
        <h2>Username: username</h2>
      </div>
      <div className='Email-address'>
        <h2>Email: email address</h2>
      </div>
  </div>
  );
}*/

export default App;
