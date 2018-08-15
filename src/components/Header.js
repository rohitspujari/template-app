import React, { Component } from 'react';
import {
  AppBar,
  Typography,
  Button,
  Toolbar,
  IconButton
} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import { Auth } from 'aws-amplify';

const styles = {
  flex: {
    flexGrow: 1,
    textAlign: 'left'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  username: {
    marginRight: 20
  }
};

class Header extends Component {
  state = {};
  render() {
    //console.log(this.props);
    const { authData, authState } = this.props;
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            style={styles.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>

          <Typography style={styles.flex} variant="title" color="inherit">
            Application
          </Typography>
          <Typography
            style={styles.username}
            variant="subheading"
            color="inherit"
          >
            {authData && authData.username}
          </Typography>
          <Button
            color="inherit"
            onClick={() => this.props.signOut(this.props)}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  username: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

export default Header;