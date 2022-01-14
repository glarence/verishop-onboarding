// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, { useState } from "react";
import ProductList from "./components/ProductList";
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import logo from './logo.svg';
import './App.css';

const SSRApp = ({ data }) => {
  const [result, setResult] = useState({ loading: false, products: data });

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredUsers = filterUsernames(users, searchQuery);

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
};

export default SSRApp;
