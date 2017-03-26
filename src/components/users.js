import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers } from '../actions';

class Users extends Component {

  componentWillMount() {
    this.props.getUsers();
  }

  renderRow(user) {
    return (
      <tr key={user._id}>
        <td><Link to={`/users/${user._id}`}>Show</Link></td>
        <td><Link to={`/users/${user._id}/edit`}>Edit</Link></td>
        <td><Link to={`/users/${user._id}/delete`}>Delete</Link></td>
        <td>{user.email}</td>
      </tr>
    )
  }

  render() {
    if(!this.props.users.all.length) {
      return <div>Loading...</div>
    }
    return (
      <table>
        <thead>
          <tr>
            <td>Show</td>
            <td>Edit</td>
            <td>Delete</td>
            <td>User</td>
          </tr>
        </thead>
        <tbody>
          { this.props.users.all.map(user => this.renderRow(user)) }
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, { getUsers })(Users);
