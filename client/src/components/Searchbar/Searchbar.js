import React from 'react';
import 'react-bootstrap';
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
        <form className="d-flex flex-row">
          <div className="mb-3 col-sm-3 pl-0 pr-2">
            <input
              type="text"
              className="form-control"
              placeholder="Type here what you are looking for"
            />
          </div>
          <div className="btn-medium">
            <Button className="btn-login">Search</Button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Searchbar;
