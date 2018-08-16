import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import { withAuthenticator } from 'aws-amplify-react';
import './App.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { Authenticator } from 'aws-amplify-react';
import { AmplifyTheme } from 'aws-amplify-react';
import { Auth } from 'aws-amplify';
import Clock from './components/Clock';
import PubSub from './components/PubSub';
import Header from './components/Header';
import myAuthTheme from './utils/myAuthTheme';
import { Hub } from 'aws-amplify';
import IoTComponent from './components/IoTComponent';

Amplify.configure(aws_exports);

class App extends Component {
  state = {
    signedIn: false
  };

  authListner = Hub.listen('auth', this, 'authListener');

  onHubCapsule = capsule => {
    console.log(capsule);
    const { channel, payload } = capsule;
    if (payload.event == 'signOut') {
      this.setState({ signedIn: false });
    } else {
      this.setState({ signedIn: true });
    }
  };

  render() {
    //console.log(Auth);
    return (
      <Authenticator
        includeGreetings={false}
        className="App"
        theme={myAuthTheme}
      >
        <Header />
        <IoTComponent />
      </Authenticator>
    );
  }
}

export default App;
