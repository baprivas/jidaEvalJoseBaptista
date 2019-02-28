import React, { Component } from 'react';
import Navigation from './navigation';
import {Link} from 'react-router-dom';


class Settings extends Component {

  componentWillMount() {
    
    console.log("here");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation/>
          <h1>Jida Test SETTINGS</h1>
          <li><Link  className="red-text text-lighten-1" to='/settings/countries'>Countries</Link></li>
        </header>
      </div>
    );
  }
}

export default Settings;