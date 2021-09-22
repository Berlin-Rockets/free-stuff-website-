import React from 'react'

export default function PostOrSearch(props) {
    return (
        <div>
        <label htmlFor="">if you want to post item please press true or if you search for it press false</label>
        <select
          className="form-select"
          aria-label="Default select example"
          name="PostOrSearch"
          onChange={props.handleChange}
          defaultValue={props.getState("PostOrSearch", "")}
        >
          <option selected></option>
          <option>true</option>
          <option>false</option>
         
        </select>
        <br />
        <label htmlFor="">if the item is used please press true ,if new press false</label>
        <select
          class="form-select"
          aria-label="Default select example"
          name="usedState"
          onChange={props.handleChange}
          defaultValue={props.getState("usedState", "")}
        >
          <option selected></option>
          <option>true</option>
          <option>false</option>
         
        </select>
        </div>
    )
}
