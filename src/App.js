import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut, AmplifyS3Album, AmplifyS3Text } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <AmplifySignOut />
        <header className="App-header">
      <AmplifyS3Album />
      <AmplifyS3Text textKey="example.txt" />
          <p>
            Insert S3 Explorer here
          </p>
    
        </header>
      </div>
    );
  }
}



export default withAuthenticator(App);
