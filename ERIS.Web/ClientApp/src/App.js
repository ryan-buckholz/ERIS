import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Details } from './components/Details';
import { Edit } from './components/Edit';

import './custom.css'
import { Search } from './components/Search';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
          <Route exact path='/' component={Home} />
          <Route path='/Search' component={Search} />
          <Route path='/counter' component={Counter} />
          <Route path='/fetch-data' component={FetchData} />
          <Route path='/Details' component={Details} />
          <Route path='/Edit' component={Edit} />        
      </Layout>
    );
  }
}

