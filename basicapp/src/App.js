import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import Combobox from "react-widgets/Combobox";
import { useState } from 'react';
import UserList from './UserList';
import UserProfile from './UserProfile';
import { Suspense } from 'react/cjs/react.production.min';
import { BrowserRouter as Router } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const GET_USERS = gql`
  query GetUsers {
    users {
      data {
        id
        username
        email
      }
    }
  }
`;

function Users({ query, setQuery }) {
  const { loading, error, data } = useQuery(GET_USERS);

  //When loading is false and there is no error, the query has completed. 
  if (!loading && !error && data){
    return (<Combobox
              filter='contains'
              dataKey='id'
              textField='username'
              value={query}
              onChange={query => setQuery(query)}
              //onSelect={console.log('hi there ')}
              //onSelect={() => {console.log('hi there ');}}
              onSelect={query => { console.log('hi there ' + query.username);}}
              //onSelect={SelectFunction}
              data={ data.users.data }
            />);
  } else {
    return <p>Could not fetch users!</p>
  }
}

function App() {

  const [query, setQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState('');

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
        <div>
            <Users
              query = {query}
              setQuery = {setQuery}
            />
        </div>

        <div>
          <UserProfile/>
        </div>
  
        </header>
      </div>
    );
}

//let SelectFunction = function(query) { console.log('hi there ' + query.userName);}
//let SelectFunction = function() { console.log('hi there ');}
let SelectFunction = () => { console.log('hi there ');}

//function SelectUser(query){
let selectUser = () => {
  console.log('hi there ');
}
function SelectUser(){
  console.log('hello world');
  //console.log('Selected user: ' + query.userName);

  //Display selected user in UserProfile
}

export default App;
