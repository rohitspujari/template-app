import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Authenticator } from 'aws-amplify-react';
import myAuthTheme from './utils/myAuthTheme';

const federated = {
  google_client_id:
    '277830869306-6qj1p3mep3utio2c9a3lgudfgga9sd2j.apps.googleusercontent.com',
  facebook_app_id: '133718410632322'
  //amazon_client_id: ''
};

ReactDOM.render(
  <App theme={myAuthTheme} federated={federated} />,
  document.getElementById('root')
);
registerServiceWorker();
