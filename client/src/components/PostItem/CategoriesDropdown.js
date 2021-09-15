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
    console.log(event.target);
    setCategory(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  console.log(Category);
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
          name='Category'
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value="Books">Books</MenuItem>
          <MenuItem
            value="Clothing & Textiles
"
          >
            Clothing & Textiles
          </MenuItem>
          <MenuItem value="Furniture">Furniture</MenuItem>
          <MenuItem value="Auto">Auto</MenuItem>
          <MenuItem
            value="Electronics & Appliances
"
          >
            Electronics & Appliances
          </MenuItem>
          <MenuItem value="Pets">Pets</MenuItem>
          <MenuItem value="Gardening">Gardening</MenuItem>
          <MenuItem
            value="Office Supplies
"
          >
            Office Supplies
          </MenuItem>
          <MenuItem
            value="Sports & Leisure
"
          >
            Sports & Leisure
          </MenuItem>
          <MenuItem
            value="Movies, Music & Books
"
          >
            Movies, Music & Books
          </MenuItem>
          <MenuItem value="Decoration">Decoration</MenuItem>
          <MenuItem value="Beauty">Beauty</MenuItem>
          <MenuItem
            value="Kitchen utensils
"
          >
            Kitchen utensils
          </MenuItem>
          <MenuItem
            value="Tools
"
          >
            Tools
          </MenuItem>
          <MenuItem
            value="Other
"
          >
            Other
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
