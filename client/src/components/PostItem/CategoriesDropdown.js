import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function CategoriesDropdown() {
  const classes = useStyles();
  const [Category, setCategory] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
        Open the categories
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Category</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={Category}
          onChange={handleChange}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value={1}>Books</MenuItem>
          <MenuItem value={2}>Clothing</MenuItem>
          <MenuItem value={3}>Furniture</MenuItem>
          <MenuItem value={4}>...</MenuItem>
          <MenuItem value={5}>...</MenuItem>
          <MenuItem value={6}>...</MenuItem>
          <MenuItem value={7}>...</MenuItem>
          <MenuItem value={8}>...</MenuItem>
          <MenuItem value={9}>...</MenuItem>
          <MenuItem value={10}>...</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
