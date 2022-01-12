// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import config from "./config.json";
import axios from "axios";
import SearchBar from './components/SearchBar';
import logo from './logo.svg';
import './App.css';

const App = ({ isSSR, ssrData }) => {
  const [err, setErr] = useState(false);
  const [result, setResult] = useState({ loading: true, products: null });
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
      <div>
          <SearchBar />
      </div>
      </header>
      </div>
    );
  }
};

export default App;
