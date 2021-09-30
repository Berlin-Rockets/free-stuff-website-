
import React from "react";
import "react-bootstrap";
import "./Footer.css";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div class="pt-5">
      <hr className="mx-auto hr-line" />
      <div className="container"></div>
      <div className="footer">
        {/* Footer main */}
        <section className="ft-main">
          <div className="ft-main-item">
            <h2 className="ft-title">
              <strong>Freebay</strong>
            </h2>
            <ul>
              <li>
                <Link to="/aboutUs">About Us</Link>
              </li>
              <li>
                <Link to="/CareersPage">Careers</Link>
              </li>
              <li>
                <Link to="https://www.buymeacoffee.com/" target="_blank">
                  Buy Me a Coffee
                </Link>
              </li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">
              <strong>Contact</strong>
            </h2>
            <ul>
              <li>
                <Link to="/accordion">FAQ</Link>
              </li>
              <li>
                <Link to="/support">Support</Link>
              </li>
              <li>
                <Link to="/advertise">Advertise</Link>
              </li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">
              <strong>Useful Links</strong>
            </h2>
            <ul>
              <li>
                <Link to="https://www.berlin.de/en/" target="_blank">
                  Official Website of Berlin
                </Link>
              </li>
              <li>

                <Link
                 to="https://allaboutberlin.com/guides/moving-to-berlin"
                  target="_blank"
                >
                  Moving to Berlin Guide
                </Link>

              </li>
              <li>
                <Link to="https://www.dw.com/en/guide-to-separating-trash-in-germany/g-38830796"
                  target="_blank"
                >
                  Separating Trash in Germany
                </Link>
              </li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">
              <strong>Stay Updated</strong>
            </h2>
            <p>Subscribe to our newsletter to get our latest features.</p>
            <form>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                className="subscribe-style-input"
              />
              <input
                type="submit"
                value="Subscribe"
                className="subscribe-style-submit"
              />
            </form>
          </div>
        </section>

        {/* Footer social */}
        <section className="ft-social">
          <ul className="ft-social-list">
            <li>
              <Link to="https://www.facebook.com/">
                <i className="fab fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link to="https://twitter.com/" target="">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/" target="">
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
          </ul>
        </section>

        {/* Footer legal */}
        <section className="ft-legal">
          <ul className="ft-legal-list">
            <li>
              <Link to="/Terms">Terms &amp; Conditions</Link>
            </li>
            <li>
              <Link to="/Privacy">Privacy Policy</Link>
            </li>
            <li className="text-center">
              freeBay&copy; {new Date().getFullYear()} made by{' '}
              <a
                href="https://www.linkedin.com/in/ahmad-suliman-19ba37214/"
                target="_blank"
                className="text-decoration-underline"
              >
                Ahmad
              </a>
              ,{' '}
              <a
                href="https://www.linkedin.com/in/nathaly-colombo/"
                target="_blank"
                className="text-decoration-underline"
              >
                Nathaly
              </a>{' '}
              and{' '}
              <a
                href="https://www.linkedin.com/in/stanislavgenunchi/"
                target="_blank"
                className="text-decoration-underline"
              >
                Stanislav
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Footer;
