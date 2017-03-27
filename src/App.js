import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Users from './components/users';
import User from './components/user';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Users CRUD</h2>
        </div>
        <Link to="/users" className="link-menu">Users</Link>
        <Route path="/users" component={Users} />
        <Route path="/users/:id" component={User} />
      </div>
    );
  }
}

export default App;
