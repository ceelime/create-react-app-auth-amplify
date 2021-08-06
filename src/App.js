import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <AmplifySignOut />
        <header className="App-header">
         <img src = "https://www.noaa.gov/themes/custom/noaa/images/noaa_logo.png">
        </header>

      Insert info here for s3 explorer
      </div>
    );
  }
}

export default withAuthenticator(App);
