import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions';

class Users extends Component {

  componentWillMount() {
    this.props.getUsers();
  }

  render() {
    if(!this.props.users.all.length) {
      return <div>Loading...</div>
    }
    return (
      <ul>{ this.props.users.all.map(user => <li key={user._id}>{user.email}</li>) }</ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, { getUsers })(Users);
