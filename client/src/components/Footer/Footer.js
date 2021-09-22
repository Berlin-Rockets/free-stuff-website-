import React from "react";
import "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <div>
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
                <a href="/aboutUs">About Us</a>
              </li>
              <li>
                <a href="/CareersPage">Careers</a>
              </li>
              <li>
                <a href="https://www.buymeacoffee.com/" target="_blank">
                  Buy Me a Coffee
                </a>
              </li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">
              <strong>Contact</strong>
            </h2>
            <ul>
              <li>
                <a href="/support">FAQ</a>
              </li>
              <li>
                <a href="/support">Support</a>
              </li>
              <li>
                <a href="/Advertise">Advertise</a>
              </li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">
              <strong>Useful Links</strong>
            </h2>
            <ul>
              <li>
                <a href="https://www.berlin.de/en/" target="_blank">
                  Official Website of Berlin
                </a>
              </li>
              <li>
                <a
                  href="https://allaboutberlin.com/guides/moving-to-berlin"
                  target="_blank"
                >
                  Moving to Berlin Guide
                </a>
              </li>
              <li>
                <a
                  href="https://www.dw.com/en/guide-to-separating-trash-in-germany/g-38830796"
                  target="_blank"
                >
                  Separating Trash in Germany
                </a>
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
              <a href="https://www.facebook.com/">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </section>

        {/* Footer legal */}
        <section className="ft-legal">
          <ul className="ft-legal-list">
            <li>
              <a href="/Terms">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="/Privacy">Privacy Policy</a>
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
