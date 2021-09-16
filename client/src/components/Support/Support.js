import React, { Component } from 'react';

import Accordion from '../Accordion/Accordion';
import './Support.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

function Support() {
  return (
    <React.Fragment>
      <div className="hero">
        <h1>Support</h1>
        <section className="description">
          <p>
            Need help? Fill out the form above describing us your concerns.
            Please keep in mind that our Support team takes up to 72 hours to
            provide you with a response. :)
          </p>
        </section>
      </div>
      <Accordion />
    </React.Fragment>
  );
}

export default Support;
