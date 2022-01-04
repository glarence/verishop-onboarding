import logo from './logo.svg';
import './App.css';
import SearchBar from './searchBar';
import { Suspense } from 'react/cjs/react.production.min';
import { useState } from 'react';

function App() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredUsers = filterUsers(users, searchQuery);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      <div>
          <SearchBar 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <ul>
            {users.map((user) => {
              <li key={user.key}>{user.firstName + user.lastName}</li>
            })}
          </ul>
      </div>

      </header>
    </div>
  );
  //HomePage()
  //UserProfile()
  //);
}

const users = [
  { id: '0', firstName: 'James', lastName: 'Sun', userName: 'jamessun', emailAddress: 'jamessun@gmail' }, 
  { id: '1', firstName: 'Michael', lastName: 'Enferadi', userName: 'michaelenferadi', emailAddress: 'michaelenferadi@gmail' }, 
  { id: '2', firstName: 'Crystal', lastName: 'Yang', userName: 'crystalyang', emailAddress: 'crystalyang@aol.com'}, 
  { id: '3', firstName: 'Allie', lastName: 'Scott', userName: 'alliescott', emailAddress: 'alliescott@yahoo.com'},
];

const filterUsers = (users, query) => {
  if(!query){
    return users;
  }

  return users.filter((user) => {
    const userName = user.firstName + user.lastName;
    return userName.includes(query);
  });
};

function HomePage(props){
  return(
    <div className='SearchTitle'>
      <h1>Search User</h1>
      <div className='SearchBar'>
          
      </div>
    </div>
  );
}

function UserProfile(props){
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
}

export default App;
