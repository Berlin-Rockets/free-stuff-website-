import React from 'react';

function SupportForm() {
  return (
    <div>
      <div className="container">
        {' '}
        <div className="section-head col-sm-12">
          <h4>
            <span>Contact Form</span>
          </h4>
          <p>
            Keep in mind that our team takes up to 72 hours to respond your
            inquire.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-7 mx-auto">
            <div className="card mt-2 mx-auto p-4 bg-light">
              <div className="card-body bg-light">
                <div className="container">
                  <form id="contact-form" >
                    <div className="controls">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            {' '}
                            <label htmlFor="form_name">Firstname *</label>{' '}
                            <input
                              id="form_name"
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Please enter your firstname *"
                              required="required"
                              data-error="Firstname is required."
                            />{' '}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            {' '}
                            <label htmlFor="form_lastname">Lastname *</label>{' '}
                            <input
                              id="form_lastname"
                              type="text"
                              name="surname"
                              className="form-control"
                              placeholder="Please enter your lastname *"
                              required="required"
                              data-error="Lastname is required."
                            />{' '}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            {' '}
                            <label htmlFor="form_email">Email *</label>{' '}
                            <input
                              id="form_email"
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="Please enter your email *"
                              required="required"
                              data-error="Valid email is required."
                            />{' '}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            {' '}
                            <label htmlFor="form_need">
                              Please specify your need *
                            </label>{' '}
                            <select
                              id="form_need"
                              name="need"
                              className="form-control"
                              required="required"
                              data-error="Please specify your need."
                            >
                              <option value=""  disabled>
                                --Select Your Issue--
                              </option>
                              <option>Advertise</option>
                              <option>My Account</option>
                              <option>Post Item</option>
                              <option>Other</option>
                            </select>{' '}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            {' '}
                            <label htmlFor="form_message">Message *</label>{' '}
                            <textarea
                              id="form_message"
                              name="message"
                              className="form-control"
                              placeholder="Write your message here."
                              rows="4"
                              required="required"
                              data-error="Please, leave us a message."
                            ></textarea>{' '}
                          </div>
                        </div>

                        <div className="col-md-12 pt-2">
                          <input
                            type="submit"
                            className="btn btn-success btn-send pt-2 btn-block float:right"
                            value="Submit"
                          />{' '}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportForm;
