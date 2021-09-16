import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CategoriesDropdown from "./CategoriesDropdown";

export class Categories extends Component {
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
            <AppBar title="Select Item Category" />
            <h6>Select a category to place your item.</h6>
            {/* <TextField
              placeholder="Category"
              label="Select a category to place your item."
              onChange={handleChange("categories")}
              defaultValue={values.categories}
              margin="normal"
              fullWidth
            /> */}
            <br />
            <CategoriesDropdown  />
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
export default Categories;
