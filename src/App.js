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

  myListner = Hub.listen('auth', this, 'MyListener');

  onHubCapsule = capsule => {
    console.log(capsule);
    const { channel, payload } = capsule;
    if (payload.event == 'signOut') {
      this.setState({ signedIn: false });
    }
  };

  componentDidMount() {
    // this.setState({ username: Auth.user.username });
  }

  protectedContent = () => {
    return (
      <Fragment>
        <Header signOut={this.signOut} />
        <IoTComponent />
      </Fragment>
    );
  };

  render() {
    //console.log(Auth);
    return (
      <Authenticator
        includeGreetings={false}
        hideDefault={this.state.signedIn}
        className="App"
        theme={myAuthTheme}
        onStateChange={this.handleAuthStateChange}
      >
        {this.state.signedIn && this.protectedContent()}
      </Authenticator>
    );
  }

  handleAuthStateChange = state => {
    if (state === 'signedIn') {
      this.setState({ signedIn: true });
    }
  };

  signOut = props => {
    Auth.signOut()
      .then(data => {
        //props.onStateChange('signIn');
        this.setState({ signedIn: false });
      })
      .catch(err => console.log(err));
  };
}

export default App;
