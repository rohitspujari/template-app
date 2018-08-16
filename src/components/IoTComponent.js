import React, { Component } from 'react';
import Header from './Header';
import Amplify, { PubSub } from 'aws-amplify';
import { AWSIoTProvider } from '@aws-amplify/pubsub/lib/Providers';
import { Button } from '@material-ui/core/';

Amplify.addPluggable(
  new AWSIoTProvider({
    aws_pubsub_region: 'us-east-1',
    aws_pubsub_endpoint: 'wss://a3ey76w3879pwd.iot.us-east-1.amazonaws.com/mqtt'
  })
);

class IoTComponent extends Component {
  state = {};

  componentWillMount() {
    this.sub = PubSub.subscribe('topic/1').subscribe({
      next: data => console.log('Message received', data),
      error: error => console.error(error),
      close: () => console.log('Done')
    });
  }
  componentWillUnmount() {
    this.sub.unsubscribe();
  }
  //   iot = PubSub.subscribe('myTopic').subscribe({
  //     next: data => console.log('Message received', data),
  //     error: error => console.error(error),
  //     close: () => console.log('Done')
  //   });

  render() {
    console.log(this.sub);
    const { authState } = this.props;
    if (authState !== 'signedIn') {
      return null;
    }

    return (
      <div>
        <Button
          color="inherit"
          onClick={async () => {
            console.log('hello');
            try {
              await PubSub.publish('topic/1', {
                msg: 'Hello to all subscribers!'
              });
            } catch (error) {
              console.log(error);
            }
          }}
        >
          Publish
        </Button>
      </div>
    );
  }
}

export default IoTComponent;
