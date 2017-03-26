import React, { Component } from 'react';
import Users from './components/users';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Users CRUD</h2>
        </div>
        <Users />
      </div>
    );
  }
}

export default App;
