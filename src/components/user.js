import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions';

class User extends Component {

  componentWillMount() {
    console.log('componentWillMount', this.props.match.params.id);
    this.props.getUser(this.props.match.params.id);
  }

  render() {
    console.log(this.props.match.params.id);
    console.log('RENDER', this.props.users.user);
    if(!this.props.users.user) {
      return <div>Loading...</div>
    }
    return (
      <dl>
        <dt>Email:</dt>
        <dd>{ this.props.users.user.email }</dd>
        <dt>Password:</dt>
        <dd>{ this.props.users.user.password }</dd>
      </dl>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, { getUser })(User);
