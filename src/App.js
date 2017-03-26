import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory } from 'react-router-dom';
import Users from './components/users';
import User from './components/user';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <div className="App">
          <div className="App-header">
            <h2>Users CRUD</h2>
          </div>
          <Link to="/users" className="link-menu">Users</Link>
          <Route path="/users" component={Users} />
          <Route path="/users/:id" component={User} />
        </div>
      </Router>
    );
  }
}

export default App;
