import React from "react";
// import { Input } from "antd";

export default function NameAndCategory(props) {
  return (
    <div>
      <input
        type="text"
        name="name"
        required
        placeholder="name"
        defaultValue={props.getState("")}
        className="form-control mb-3 col-11 ml-3"
        onChange={props.handleChange}
      />

      <p>
        <label htmlFor="">Open the categories</label>
        <select
          class="form-select"
          aria-label="Default select example"
          name="category"
          onChange={props.handleChange}
          defaultValue={props.getState("category", "")}
        >
          <option selected></option>
          <option>Auto</option>
          <option>Electronics & Appliances</option>
          <option>Furniture</option>
          <option>Clothing & Textiles</option>
          <option>Pets</option>
          <option>Gardening</option>
          <option>Office Supplies</option>
          <option>Sports & Leisure</option>
          <option>Movies, Music & Books</option>
          <option>Decoration</option>
          <option>Beauty</option>
          <option>Tools</option>
          <option>Kitchen utensils</option>
          <option>Other</option>
        </select>
      </p>
    </div>
  );
}
