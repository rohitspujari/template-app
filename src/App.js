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
import Clock from './components/Clock';
import PubSub from './components/PubSub';
import Header from './components/Header';
import myAuthTheme from './utils/myAuthTheme';

Amplify.configure(aws_exports);

class App extends Component {
  state = {
    signedIn: false
  };

  componentDidMount() {
    // this.setState({ username: Auth.user.username });
  }
  render() {
    console.log(Auth);
    console.log(this.props);

    return (
      <Authenticator
        includeGreetings={false}
        className="App"
        theme={myAuthTheme}
        onStateChange={this.handleAuthStateChange}
      >
        {this.state.signedIn && <Header signOut={this.signOut} />}
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
        props.onStateChange('signIn');
        this.setState({ signedIn: false });
      })
      .catch(err => console.log(err));
  };
}

export default App;
