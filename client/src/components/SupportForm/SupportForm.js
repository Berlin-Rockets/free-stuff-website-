import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const SupportForm = () => {
  return (
    <React.Fragment>
      <Typography variant="h4">Contact Form</Typography>
      <form>
        <FormControl component="fieldset">
          <FormLabel component="legend"></FormLabel>
        </FormControl>
      </form>
    </React.Fragment>
  );
};

export default SupportForm;
