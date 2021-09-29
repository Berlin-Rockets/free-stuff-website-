import React from "react";
import "react-bootstrap";
import "./Footer.css";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div class="pt-5">
      <hr />
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
                <Link to="/dvertise">Advertise</Link>
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
              />
              <input type="submit" value="Subscribe" />
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
            <li>
              &copy;{new Date().getFullYear()} Freebay - All Rights Reserved
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Footer;
