import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Details } from './components/Details';
import { Edit } from './components/Edit';
import './custom.css'
import { Search } from './components/Search';


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/Search' element={<Search/>} />
          <Route path='/fetch-data' element={<FetchData/>} />
          <Route path='/Details' element={<Details/>} />
          <Route path='/Details/:id' element={<Details/>} />
          <Route path='/Edit/:id' element={<Edit/>} />              
        </Routes>
      </Router>
                
    );
  }
}

