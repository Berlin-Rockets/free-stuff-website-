import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState("Used");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      {/* <FormLabel component="legend">Condition</FormLabel> */}
      <RadioGroup aria-label="" name="" value={value} onChange={handleChange}>
        <FormControlLabel value="Used" control={<Radio />} label="Used" />
        <FormControlLabel value="New" control={<Radio />} label="New" />
      </RadioGroup>
    </FormControl>
  );
}
