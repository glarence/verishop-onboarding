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

/*const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}*/

const USERS = gql`
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

function Users() {
  const { loading, error, data } = useQuery(USERS);

  if (loading){
    console.log("Loading API call!");
    return <p>Loading...</p>;
  }
  if (error){
    console.log("Error with API call?");
    return <p>Error :(</p>;
  }

  return data.users;
}

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

/*function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <ExchangeRates />
    </div>
  );
}*/

function App() {
  //const { search } = window.location;
  //const query = new URLSearchParams(search).get('s');
  //const [searchQuery, setSearchQuery] = useState(query || '');
  //const filteredUsers = filterUsernames(users, searchQuery);

  const [query, setQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState('');

  let selectAlert = () => alert('selected');

  console.log(Users.length);

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
        <div>
            <Combobox hideCaret
              filter='contains'
              dataKey='id'
              textField='userName'
              value={query}
              onChange={query => setQuery(query)}
              //onSelect={alert('hi there ')}
              //onSelect={() => {alert('hi there ');}}
              //onSelect={(query) => { alert('hi there ' + query.userName);}}
              onSelect={SelectFunction}
              //onSelect={selectAlert}
              data={ users }
            />
        </div>
  
        </header>
      </div>
    );
}

//let SelectFunction = function(query) { alert('hi there ' + query.userName);}
//let SelectFunction = function() { alert('hi there ');}
let SelectFunction = () => { alert('hi there ');}

//function SelectUser(query){
let selectUser = () => {
  alert('hi there ');
}
function SelectUser(){
  alert('hello world');
  //alert('Selected user: ' + query.userName);

  //Display selected user in UserProfile
}

// function ChangeUser(query) {
//   if(query)
//     alert('Changed user');
// }

/*
<SearchBar 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <h4>List of Users</h4>
            <hr />
            <UserList
              users={filteredUsers}
            />
*/

export default App;
