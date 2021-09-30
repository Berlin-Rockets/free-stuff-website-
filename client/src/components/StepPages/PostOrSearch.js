import React from 'react';

export default function PostOrSearch(props) {
  return (
    <div className="">
      <label htmlFor="">Do you want to post or are you in a search?</label>
      <select
        className="form-select"
        aria-label="Default select example"
        name="PostOrSearch"
        onChange={props.handleChange}
        defaultValue={props.getState('PostOrSearch', '')}
      >
        <option selected></option>
        <option>Post Item</option>
        <option>Search For</option>
      </select>
      <br />
      <p>
        <label htmlFor="">Is your item used or new?</label>
        <select
          class="form-select"
          aria-label="Default select example"
          name="usedState"
          onChange={props.handleChange}
          defaultValue={props.getState('usedState', '')}
        >
          <option selected></option>
          <option>Used</option>
          <option>New</option>
        </select>
      </p>
    </div>
  );
}
