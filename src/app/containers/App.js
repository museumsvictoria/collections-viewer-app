import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as systemActions from '../actions/system';
import ObjectGrid from './ObjectGrid';
import ObjectModal from './ObjectModal';

class App extends Component {
  render() {
    return (
      <div>
        <ObjectGrid />
        <ObjectModal />
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(systemActions, dispatch),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(App);
