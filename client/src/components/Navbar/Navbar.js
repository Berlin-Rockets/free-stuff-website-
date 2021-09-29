import React from 'react';
import { MenuItems } from './MenuItems';
import { Button } from '../Button/Button';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../../src/freeBay_11_500_logo.png';
import { Container } from 'react-bootstrap';

class Navbar extends React.Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  onLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    window.location.replace('/');
  };

  render() {
    // console.log(this.props.user);
    return (
      <nav className="NavbarItems">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
          ></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu '}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}

          {!this.props.user && (
            <div className="btn-container d-flex">
              <Link
                to="/login"
                className="text-dark text-decoration-none fw-bolder fs-5"
              >
                <div className="btn--log-reg">login</div>
              </Link>
              <div className="divider" />

              <Link
                to="/register"
                className="text-dark text-decoration-none fw-bolder fs-5"
              >
                <div className="btn--log-reg">register</div>
              </Link>
            </div>
          )}

          {this.props.user && (
            <li className="nav-item dropdown d-flex">
              <a
                className="nav-link dropdown-toggle text-dark  d-flex text-decoration-none align-items-center fw-bolder fs-5"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {this.props.user.data.name}
              </a>

              <ul
                className="dropdown-menu text-white"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a
                    className="dropdown-item text-decoration-none"
                    href="/myItem"
                  >
                    My items
                  </a>
                </li>
                {this.props.user && this.props.user.data.isAdmin && (
                  <li>
                    <a
                      className="dropdown-item text-decoration-none"
                      href="/allItemsControl"
                    >
                      All items
                    </a>
                  </li>
                )}
                {this.props.user && this.props.user.data.isAdmin && (
                  <li>
                    <a
                      className="dropdown-item text-decoration-none"
                      href="/allUsers"
                    >
                      All Users
                    </a>
                  </li>
                )}
              </ul>
              <div className="btn-register">
                <div className="btn--log-reg" onClick={this.onLogout}>
                  logout
                </div>
              </div>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
