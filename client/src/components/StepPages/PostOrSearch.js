import React from 'react'

export default function PostOrSearch(props) {
    return (
        <div className=''>
        <label htmlFor="">post item or search for:</label>
        <select
          className="form-select"
          aria-label="Default select example"
          name="PostOrSearch"
          onChange={props.handleChange}
          defaultValue={props.getState("PostOrSearch", "")}
        >
          <option selected></option>
          <option>Post item</option>
          <option>Search for</option>
         
        </select>
        <br />
        <p>

       
        <label htmlFor="">used item or new: </label>
        <select
          class="form-select"
          aria-label="Default select example"
          name="usedState"
          onChange={props.handleChange}
          defaultValue={props.getState("usedState", "")}
        >
          <option selected></option>
          <option>Used</option>
          <option>New</option>
         
        </select>
        </p>
        </div>
    )
}
