import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

export class Success extends Component {
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
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Success" />
            <h1>Thank your for posting your item!</h1>
            <p>
              Our team is analyzing your item and in the next 24 hours it will
              be available for all the users. You will receive an e-mail
              confirming the publishing. If you have any questions, you can
              always check our FAQ or contact our Support. :)
            </p>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
