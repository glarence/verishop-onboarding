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

const GET_USER = gql`
  query GetUser {
    user(id: 1){
      id
      username
      email
    }
  }
`;

//Test user id 1
function GetUser() {
  const { loading, error, data } = useQuery(GET_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      { data.user.username }
    </div>);
}

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

function Users( query, setQuery) {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading){
    console.log("Loading API call!");
    //return <p>Loading...</p>;
    return 'Loading...';
  }
  if (error){
    console.log("Error with API call?");
    //return <p>Error :(</p>;
    return `Error! ${error.message}`;
  }

  if (!loading && !error && data){
    return (<Combobox hideCaret
              filter='contains'
              dataKey='id'
              //textField='userName'
              textField='username'
              value={query}
              onChange={query => setQuery(query)}
              //onSelect={alert('hi there ')}
              //onSelect={() => {alert('hi there ');}}
              //onSelect={(query) => { alert('hi there ' + query.userName);}}
              onSelect={SelectFunction}
              //onSelect={selectAlert}
              //data={ users }
              data={ data.users.data }
              //data={ Users }
              //data={ fetchedUsers }
            />);
  } else {
    return <p>Could not fetch users!</p>
  }

  //When loading is false and there is no error, the query has completed. 

  //console.log(data)
  //console.log(data.users)
  //console.log(data.users.data)

  //return data;
  //return data.users;
  //return data.users.data;
  //return(<div>Users</div>); 

  //return <p>{  !loading && !error && data && JSON.stringify(data) }</p>;
}

const users = [
  { id: '0', firstName: 'James', lastName: 'Sun', userName: 'jamessun', emailAddress: 'jamessun@gmail' }, 
  { id: '1', firstName: 'Michael', lastName: 'Enferadi', userName: 'michaelenferadi', emailAddress: 'michaelenferadi@gmail' }, 
  { id: '2', firstName: 'Crystal', lastName: 'Yang', userName: 'crystalyang', emailAddress: 'crystalyang@aol.com'}, 
  { id: '3', firstName: 'Allie', lastName: 'Scott', userName: 'alliescott', emailAddress: 'alliescott@yahoo.com'},
];

/*const filterUsernames = (users, query) => {
  if(!query){
    console.log("invalid query, won't filter");
    return users;
  }

  return users.filter((user) => {
    console.log("Query is: " + query);

    const username = user.userName.toLowerCase();
    return username.includes(query);
  });
};*/

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

  //let fetchedUsers = Users();
  //console.log(fetchedUsers.length);

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
        <div>
            <Users
              query = {query}
              setQuery = {setQuery}
            />

            {/* <GetUser/> */}

            {/* <Users/> */}

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
