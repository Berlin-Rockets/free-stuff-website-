import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { name, description, categories, condition, interest, photo },
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Confirm Item Details" />
            <List>
              <ListItem>
                <ListItemText primary="Item Name" secondary={name} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Description" secondary={description} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Category" secondary={categories} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Condition" secondary={condition} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Interest" secondary={interest} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Photo" secondary={photo} />
              </ListItem>
            </List>
            <br />

            <Button color="secondary" variant="contained" onClick={this.back}>
              Back
            </Button>

            <Button color="primary" variant="contained" onClick={this.continue}>
              Confirm & Continue
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
