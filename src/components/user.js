import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions';

class User extends Component {

  componentWillUpdate(nextProps) {
    if (!this.props.users.user || (this.props.users.user._id !== nextProps.match.params.id)) {
      this.props.getUser(this.props.match.params.id);
    }
  }

  render() {
    if(!this.props.users.user) {
      return <div>Loading...</div>
    }
    return (
      <dl key={this.props.match.params.id}>
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
