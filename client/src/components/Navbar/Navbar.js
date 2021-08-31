import React from "react";
import { MenuItems } from "./MenuItems";
import { Button } from "./Button";
import "./Navbar.css";

class Navbar extends React.Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-name">Free Your Stuff</h1>

        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="btn-login">
          <Button>Login</Button>
        </div>
        <div class="divider" />
        <div className="btn-register">
          <Button>Register</Button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
