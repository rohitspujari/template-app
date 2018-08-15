import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class PubSub extends Component {
  state = {
    publish: ''
  };
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <TextField
          id="publish"
          label="Publish"
          //     className={classes.textField}
          value={this.state.publish}
          onChange={this.handleChange('publish')}
          margin="normal"
        />
        <Paper elevation={1}>
          <Typography variant="headline" component="h3">
            This is a sheet of paper.
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your
            application.
          </Typography>
        </Paper>
      </Fragment>
    );
  }
  handleChange = prop => event => {
    this.setState({
      [prop]: event.target.value
    });
  };
}

export default PubSub;
