import React from "react";
import "./Support.css";
import SupportForm from "../SupportForm/SupportForm";


function Support() {
  return (
    <React.Fragment>
      <div id="support">
        {" "}
        <div className="pt-5 pb-5">
          <div className="container">
            <div className="section-head col-sm-12">
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
