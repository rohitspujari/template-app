import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import { withAuthenticator } from 'aws-amplify-react';
import './App.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { Authenticator } from 'aws-amplify-react';
import { AmplifyTheme } from 'aws-amplify-react';
import { Auth } from 'aws-amplify';

Amplify.configure(aws_exports);

class App extends Component {
  render() {
    console.log(Auth);
    return (
      <div className="App">
        <Button variant="contained" color="primary">
          Welcome
        </Button>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
