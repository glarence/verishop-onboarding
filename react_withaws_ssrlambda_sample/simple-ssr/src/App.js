// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import config from "./config.json";
import axios from "axios";
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import logo from './logo.svg';
import './App.css';

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

const App = ({ isSSR, ssrData }) => {
  const [err, setErr] = useState(false);
  const [result, setResult] = useState({ loading: true, products: null });

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredUsers = filterUsernames(users, searchQuery);

  useEffect(() => {
    const getData = async () => {
      const url = config.SSRApiStack.apiurl;
      try {
        let result = await axios.get(url);
        setResult({ loading: false, products: result.data });
      } catch (error) {
        setErr(error);
      }
    };
    getData();
  }, []);
  if (err) {
    return <div>Error {err}</div>;
  } else {
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
            {filteredUsers.length > 0 &&
              <UserProfile
              username={filteredUsers[0].userName}
              firstname={filteredUsers[0].firstName}
              lastname={filteredUsers[0].lastName}
              emailaddress={filteredUsers[0].emailAddress}
              />
            }
          </div>
        </header>
      </div>
    );
  }
};

export default App;
