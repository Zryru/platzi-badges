import React, { Component } from "react";
import logo from "../assets/images/splat3.jpg";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="Container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo} />
            <span className="font-weight-light">Home</span>
            <span className="font-weight-bold ">Conf</span>
          </Link>
        </div>
      </div>
    );
  }
}
