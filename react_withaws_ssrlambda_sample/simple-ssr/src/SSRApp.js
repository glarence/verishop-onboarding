// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, { useState } from "react";
import ProductList from "./components/ProductList";
import SearchBar from './components/SearchBar';
import logo from './logo.svg';
import './App.css';

const SSRApp = ({ data }) => {
  const [result, setResult] = useState({ loading: false, products: data });
  return (
      <div className="App">
      <header className="App-header">
      <div>
          <SearchBar />
      </div>

      </header>
      </div>
  );
};

export default SSRApp;
