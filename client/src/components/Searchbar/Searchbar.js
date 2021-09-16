import React from 'react';
import 'react-bootstrap';
import { Search } from '@material-ui/icons';
import './Searchbar.css';
import { Button } from './../Navbar/Button';

class Searchbar extends React.Component {
  state = { term: ' ' };

  onInputChange = (e) => {
    this.setState({ term: e.value.target });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <React.Fragment>
        <form className="d-flex flex-row ">
          <div className="mb-3 col-sm-4 pl-0 pr-2">
            <div className="input-group">
              <input
                type="text"
                className="form-control py-2"
                placeholder="Type here what you are looking for"
              />
              <Button className="btn">Search</Button>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Searchbar;
