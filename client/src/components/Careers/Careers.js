import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Careers.css";

function CareersPage() {
  return (
    <div id="careers">
      <div class="pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="section-head col-sm-12">
              <h4>
                <span>Careers</span>
              </h4>
              <p>Thank you for your interest in our project!</p>
            </div>
            <div class="d-flex justify-content-center">
              <div class="col-lg-4 col-sm-6">
                <div class="item">
                  <span class="icon feature_box_col_one">
                    <i class="fas fa-briefcase"></i>
                  </span>
                  <h6>Job Openings</h6>
                  <p>
                    We are still in the initial phase of implementation of our
                    project, therefore we don't have any job openings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareersPage;
