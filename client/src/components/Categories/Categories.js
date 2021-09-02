import React, { Component } from 'react';

import './Categories.css';

class Categories extends Component {
  render() {
    return (
      <div className="cat-container">
        <ul className="cat-list">
          <li className="cat-item">
            <a href="/" class="btn btn-circle">
              Auto
            </a>
          </li>
          <li className="cat-item">
            <a href="/" class="btn btn-circle">
              Electronics
            </a>
          </li>
          <li className="cat-item">
            <a href="/" class="btn btn-circle">
              Furniture
            </a>
          </li>
          <li className="cat-item">
            <a href="/" class="btn btn-circle">
              Fashion
            </a>
          </li>
          <li className="cat-item">
            <a href="/" class="btn btn-circle">
              Animals
            </a>
          </li>
          <li className="cat-item">
            <a href="/" class="btn btn-circle">
              Garden
            </a>
          </li>
          <li className="cat-item">
            <a href="/" class="btn btn-circle">
              Free Time
            </a>
          </li>
          <li className="cat-item">
            <a href="/" class="btn btn-circle">
              Misc
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Categories;
