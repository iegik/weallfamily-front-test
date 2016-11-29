import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//import Login from '../Login'
//import { login, logout, loginAsync } from './actions'
//import * as TodoActions from '../actions'

const App = ({}) => (
  <div className="app slides">
    <div className="slide slide_loader loader">
      <div className="loader__content">Loading...</div>
    </div>
    <div className="slide slide_intro intro"></div>
    <div className="slide slide_home home"></div>
    <div className="slide slide_profile profile"></div>
    <div className="slide slide_menu menu"></div>
    <div className="slide slide_login login"></div>
  </div>
)

App.propTypes = {
}

const mapStateToProps = state => ({
//  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
//    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)