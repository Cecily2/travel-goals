import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../actions/userActions';

class LogOut extends Component {
  componentWillMount() {
    this.props.logOut();
  }

  render() {
    return (
      <Redirect to='/' />
    )
  }
}

export default connect(null, {logOut})(LogOut);
