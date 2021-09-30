import React from 'react';
// import { Input } from "antd";

export default function NameAndCategory(props) {
  return (
    <div>
      <label htmlFor="">What do you want to post or find?</label>
      <input
        type="text"
        name="name"
        required
        // placeholder="name"
        defaultValue={props.getState('')}
        className="form-control mb-3 col-11 ml-3"
        onChange={props.handleChange}
      />

      <p>
        <label htmlFor="">Choose a category for your item</label>
        <select
          className="form-select"
          aria-label="Default select example"
          name="category"
          onChange={props.handleChange}
          defaultValue={props.getState('category', '')}
        >
          <option></option>
          <option>Auto</option>
          <option>Electronics & Appliances</option>
          <option>Furniture</option>
          <option>Clothing & Textiles</option>
          <option>Pets</option>
          <option>Gardening</option>
          <option>Office Supplies</option>
          <option>Sports</option>
          <option>Leisure</option>
          <option>Decoration</option>
          <option>Beauty</option>
          <option>Tools</option>
          <option>Kitchen Utensils</option>
          <option>Other</option>
        </select>
      </p>
    </div>
  );
}
