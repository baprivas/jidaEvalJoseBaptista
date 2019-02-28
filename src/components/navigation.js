import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navigation extends Component {

  render() {
    return (
      <nav className="black">
        <ul >
        <li><Link  className="red-text text-lighten-1" to='/'>Users</Link></li>
        <li><Link  className="red-text text-lighten-1" to='/settings'>settings</Link></li>
      </ul>
      </nav>
    );
  }
}

export default Navigation;