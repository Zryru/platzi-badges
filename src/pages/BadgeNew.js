import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "../styles/BadgeNew.css";
import logo from "../assets/images/splat3.jpg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

export default class BadgeNew extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="BadgeNew__hero">
          <img className="img-fluid" src={logo} />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge name="Octoling" game="splatoon" twitter="@splat" />
            </div>
            <div className="col-6">
              <BadgeForm ></BadgeForm>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
