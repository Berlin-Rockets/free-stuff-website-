import React from 'react';

export default function LocationAndDiscreption(props) {
  return (
    <div>
      <label htmlFor="">
        Provide a decent description of your item or search
      </label>
      <textarea
        className="form-control mb-3 col-11 ml-3"
        id="exampleFormControlTextarea1"
        rows="5"
        onChange={props.handleChange}
        name="description"
      >
        {props.getState('description', '')}
      </textarea>

      <p>
        <label htmlFor="">Where are you located?</label>
        <select
          class="form-select"
          aria-label="Default select example"
          name="location"
          onChange={props.handleChange}
          defaultValue={props.getState('location', '')}
        >
          <option>Baden-Württemberg</option>
          <option>Bayern</option>
          <option>Berlin</option>
          <option>Brandenburg</option>
          <option>Bremen</option>
          <option>Hamburg</option>
          <option>Hessen</option>
          <option>Mecklenburg-Vorpommern</option>
          <option>Niedersachsen</option>
          <option>Nordrhein-Westfalen</option>
          <option>Rheinland-Pfalz</option>
          <option>Saarland</option>
          <option>Sachsen-Anhalt</option>
          <option>Sachsen</option>
          <option>Schleswig-Holstein</option>
          <option>Thüringen</option>
        </select>
      </p>
    </div>
  );
}
