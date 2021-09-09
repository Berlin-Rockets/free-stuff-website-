import React from 'react';
import 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <div>
      <div class="container"></div>
      <div class="footer">
        {/* Footer main */}
        <section class="ft-main">
          <div class="ft-main-item">
            <h2 class="ft-title">
              <strong>About Us</strong>
            </h2>
            <ul>
              <li>
                <a href="#">Our Mission</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="https://www.buymeacoffee.com/" target="_blank">
                  Buy Me a Coffee
                </a>
              </li>
            </ul>
          </div>
          <div class="ft-main-item">
            <h2 class="ft-title">
              <strong>Contact</strong>
            </h2>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="./Support/Support.js">Support</a>
              </li>
              <li>
                <a href="#">Advertise</a>
              </li>
            </ul>
          </div>
          <div class="ft-main-item">
            <h2 class="ft-title">
              <strong>Resources</strong>
            </h2>
            <ul>
              <li>
                <a href="#" target="_blank">
                  Some link 1
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Some link 2
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Some link 3
                </a>
              </li>
            </ul>
          </div>
          <div class="ft-main-item">
            <h2 class="ft-title">
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
        <section class="ft-social">
          <ul class="ft-social-list">
            <li>
              <a href="#" target="_blank">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </section>

        {/* Footer legal */}
        <section class="ft-legal">
          <ul class="ft-legal-list">
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              &copy;{new Date().getFullYear()} Free Your Stuff - All Rights
              Reserved
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Footer;
