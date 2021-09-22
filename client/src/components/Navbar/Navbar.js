import React from 'react';
import { MenuItems } from './MenuItems';
import { Button } from './Button';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../../src/freeBay_11_500_logo.png';

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
        <Link to='/'  className="btn-circle">
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
            <div className="d-flex m-3 align-items-center">
              <div className="btn-login">
                <Button>
                  <Link to="/login" className="text-dark text-decoration-none fw-bolder fs-5">
                    {' '}
                    login
                  </Link>
                </Button>
              </div>
              <div className="divider" />

              <div className="btn-register">
                <Button>
                  <Link to="/register" className="text-dark text-decoration-none fw-bolder fs-5">
                    Register
                  </Link>
                </Button>
              </div>
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
                <a className="dropdown-item text-decoration-none" href="/myItem">
                  My items
                </a>
              </li>
              {this.props.user && this.props.user.data.isAdmin && (
                <li>
                  <a className="dropdown-item text-decoration-none" href="/allItemsControl">
                    All items
                  </a>
                </li>
              )}
              {this.props.user && this.props.user.data.isAdmin && (
                <li>
                  <a className="dropdown-item text-decoration-none" href="/allUsers">
                    All Users
                  </a>
                </li>
              )}
             
            </ul>
            <div className="btn-register">
                <Button className='fw-bolder fs-5' onClick={this.onLogout}>logout</Button>
               </div>
          </li>
          )}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
