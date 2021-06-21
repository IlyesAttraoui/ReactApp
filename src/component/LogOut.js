import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link, Redirect} from "react-router-dom"
class LogOut extends Component {


  constructor(props) {
    super(props)
localStorage.removeItem("x")
localStorage.removeItem("y")

  }

  render() {
    return <Redirect to="/"/>


  }
}
export default LogOut
