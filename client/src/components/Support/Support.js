import React, { Component } from "react";
import "./Support.css";
import Accordion from "../Accordion/Accordion";
import SupportForm from "../SupportForm/SupportForm";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

function Support() {
  return (
    <React.Fragment>
      <div id="support">
        {" "}
        <div class="pt-5 pb-5">
          <div class="container">
            <div class="section-head col-sm-12">
              <h4>
                <span>Support</span>
              </h4>
              <p>
                Need help? Please read through the FAQ section first to check if
                your question is not already answered. If you still require
                assistance after it, fill out the form above describing us your
                concerns.
              </p>
            </div>
          </div>
        </div>
        {/* <Accordion /> */}
        <SupportForm />
      </div>
    </React.Fragment>
  );
}

export default Support;
