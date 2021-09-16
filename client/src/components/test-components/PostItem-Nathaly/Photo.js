import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dropzone from "./Dropzone";

export class Photo extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Upload a Picture" />
            <h6>Please select up to 3 pictures of your item.</h6>
            <br />
            <Dropzone />
            {/* <Button variant="contained" component="label">
              Upload File
              <input type="file" hidden />
            </Button> */}
            {/* <TextField
              placeholder="Item Picture"
              label="Please select up to 3 pictures of your item."
              onChange={handleChange("photo")}
              defaultValue={values.photo}
              margin="normal"
              fullWidth
            /> */}
            <br />
            <Button color="secondary" variant="contained" onClick={this.back}>
              Back
            </Button>
            <Button color="primary" variant="contained" onClick={this.continue}>
              Continue
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Photo;
