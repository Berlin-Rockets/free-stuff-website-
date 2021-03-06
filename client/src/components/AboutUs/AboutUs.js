import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUs.css";

function AboutUsPage() {
  return (
    <div id="aboutus">
      <div className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="section-head col-sm-12">
              <h4>
                <span>About Us</span>
              </h4>
              <p>
                Our platform facilitates the exchange of items between people
                living in Germany. After registering, users can search for items
                they want or post their own items for donation or exchange with
                others.
              </p>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                <span className="icon feature_box_col_one">
                  <i className="fa fa-feather"></i>
                </span>
                <h6>Story</h6>
                <p>
                  This project was deployed and available for testing within 7
                  weeks of work. We are still working in the general improvement
                  and we wish to add more features.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                <span className="icon feature_box_col_one">
                  <i className="fa fa-lightbulb"></i>
                </span>
                <h6>Motivation</h6>
                <p>
                  People from all over the world arrive and leave Berlin all the
                  time. When renting a place in Germany, you have to pay an
                  expensive deposit equivalent to three months rent. Many people
                  arrive alone and are not able to buy basic items right away,
                  while others move out of the city and have no way of taking
                  all their things with them.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                <span className="icon feature_box_col_one">
                  <i className="fa fa-laptop-code"></i>
                </span>
                <h6>Who We Are</h6>
                <p>
                  We are three students who have completed a one-year Full Stack
                  web development course at Digital Career Institute in Berlin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
