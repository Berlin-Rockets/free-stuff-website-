import React from "react";
import "react-bootstrap";
import "./Footer.css";

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
                <a href="/Accordion">FAQ</a>
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
                <a href="https://tierschutz-berlin.de/" target="_blank">
                  Tierheim Berlin
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
            <li className='text-center'>
              &copy;{new Date().getFullYear()}  made by{" "}
              <a
                href="https://www.linkedin.com/in/ahmad-suliman-19ba37214/"
                target="_blank"
              >
                Ahmad
              </a>
              ,{" "}
              <a
                href="https://www.linkedin.com/in/nathaly-colombo/"
                target="_blank"
              >
                Nathaly
              </a>{" "}
              
              <a
                href="https://www.linkedin.com/in/stanislavgenunchi/"
                target="_blank"
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
