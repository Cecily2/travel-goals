import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({logOut: logOut}, dispatch)
}

export default connect(null, mapDispatchToProps)(LogOut);
