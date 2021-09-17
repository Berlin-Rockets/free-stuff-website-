import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

// const useStyles = makeStyles({
//   field: {
//     marginTop: 20,
//     marginBottom: 20,
//     // display: 'block',
//   },
// });

const SupportForm = () => {
  // const classes = useStyles();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [salutation, setSalutation] = useState('');
  const [details, setDetails] = useState('');
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState('Mr.');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstNameError(false);
    setLastNameError(false);
    setSalutation(false);
    setDetailsError(false);

    if (firstName === '') {
      setFirstNameError(true);
    }
    if (lastName === '') {
      setLastNameError(true);
    }
    if (details === '') {
      setDetailsError(true);
    }
    // if (firstName && details) {
    //   console.log(firstName, details, category);
    // }
  };

  return (
    <Container>
      <Typography
        variant="h4"
        // color="textSecondary"
        component="h2"
        gutterBottom
      >
        Contact Form
      </Typography>

      <FormLabel component="legend">
        Please let us know about your request and we will get back to you within
        72 hours.
      </FormLabel>

      <FormControl
        fullWidth
        // className={classes.field}
      >
        <RadioGroup
          row
          aria-label="gender"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          name="row-radio-buttons-groups"
        >
          <FormControlLabel
            value="mr"
            control={<Radio />}
            label="Mr."
            style={{ paddingRight: '80px' }}
          />
          <FormControlLabel
            value="mrs/ms"
            control={<Radio />}
            label="Mrs. / Ms."
          />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <InputLabel id="demo-simple-select-standard-label">
          Salutation
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={salutation}
          onChange={(e) => setSalutation(e.target.value)}
          label="Salutation"
          style={{ width: '120px' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Dr.'}>Dr.</MenuItem>
          <MenuItem value={'Prof.'}>Prof.</MenuItem>
          <MenuItem value={'Dr. Dr.'}>Dr. Dr.</MenuItem>
          <MenuItem value={'Prof. Dr.'}>Prof. Dr.</MenuItem>
        </Select>
      </FormControl>

      <form noValidate onSubmit={handleSubmit}>
        <TextField
          required
          // className={classes.field}
          onChange={(e) => setFirstName(e.target.value)}
          id="firstName"
          name="firstName"
          label="First Name"
          color="secondary"
          fullWidth
          error={firstNameError}
          autoComplete="given-name"
          variant="standard"
        />
        <TextField
          required
          // className={classes.field}
          onChange={(e) => setLastName(e.target.value)}
          id="lastName"
          name="lastName"
          label="Last Name"
          color="secondary"
          fullWidth
          error={lastNameError}
          autoComplete="family-name"
          variant="standard"
        />
        <TextField
          // className={classes.field}
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />
        {/* <Radio value="hello" />
          <Radio value="goodbye" /> */}
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

// const SupportForm = () => {
//   return (
//     <React.Fragment>
//       <Typography variant="h4">Contact Form</Typography>
//       <form>
//         <FormControl component="fieldset">
//           <FormLabel component="legend">
//             Please let us know about your request. We will get back to you
//             within 3 days.
//           </FormLabel>
//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={6}>
//               <RadioGroup
//                 aria-label="quiz"
//                 name="quiz"
//                 // value={value}
//                 // onChange={handleRadioChange}
//               >
//                 <FormControlLabel
//                   value="best"
//                   control={<Radio />}
//                   label="The best!"
//                 />
//                 <FormControlLabel
//                   value="worst"
//                   control={<Radio />}
//                   label="The worst."
//                 />
//               </RadioGroup>
//             </Grid>

//             <Grid item xs={12} sm={6}>
//               <TextField
//                 required
//                 id="firstName"
//                 name="firstName"
//                 label="First Name"
//                 fullWidth
//                 autoComplete="given-name"
//                 variant="standard"
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 required
//                 id="lastName"
//                 name="lastName"
//                 label="Last Name"
//                 fullWidth
//                 autoComplete="family-name"
//                 variant="standard"
//               />
//             </Grid>
//           </Grid>
//         </FormControl>
//       </form>
//     </React.Fragment>
//   );
// };

export default SupportForm;
