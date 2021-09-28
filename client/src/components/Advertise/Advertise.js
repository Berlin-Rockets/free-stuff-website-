import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Advertise.css";

function AdvertisePage() {
  return (
    <div id="advertise">
      <div class="pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="section-head col-sm-12">
              <h4>
                <span>Advertise With Us</span>
              </h4>
              <p>Do you wish to advertise in our website?</p>
            </div>
            <div class="d-flex justify-content-center">
              <div class="col-lg-4 col-sm-6">
                <div class="item">
                  <span class="icon feature_box_col_one">
                    <i class="fas fa-ad"></i>
                  </span>
                  <h6>Advertise</h6>
                  <p>
                    Please fill out the contact form in our Support page. We'd
                    be happy to hear it from you!
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

export default AdvertisePage;
