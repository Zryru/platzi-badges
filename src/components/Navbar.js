import React, { Component } from "react";
import logo from "../assets/images/splat3.jpg";
import "../styles/Navbar.css";
export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="Container-fluid">
          <a className="Navbar__brand" href="/">
            <img className="Navbar__brand-logo" src={logo} />
            <span className="font-weight-light">Home</span>
            <span className="font-weight-bold ">Conf</span>
          </a>
        </div>
      </div>
    );
  }
}
