import React from "react";

export default function LocationAndDiscreption(props) {
  return (
    <div>
      <p>
        <input
          type="text"
          name="discreption"
          placeholder="discreption"
          defaultValue={props.getState("discreption", "")}
          className="form-control mb-3 col-11 ml-3"
          onChange={props.handleChange}
        />
      </p>

      <p>
        <select
          class="form-select"
          aria-label="Default select example"
          name="location"
          onChange={props.handleChange}
          defaultValue={props.getState("location", "")}
        >
          <option selected>Open this select menu</option>
          <option>Berlin</option>
          <option>Hamburg</option>
          <option>Baden-Württemberg</option>
          <option>Bayern</option>
          <option>Brandenburg</option>
          <option>Bremen</option>
          <option>Hessen</option>
          <option>Niedersachsen</option>
          <option>Mecklenburg-Vorpommern</option>
          <option>Nordrhein-Westfalen</option>
          <option>Rheinland-Pfalz</option>
          <option>Saarland</option>
          <option>Sachsen</option>
          <option>Sachsen-Anhalt</option>
          <option>Schleswig-Holstein</option>
          <option>Thüringen</option>
        </select>
      </p>
    </div>
  );
}
