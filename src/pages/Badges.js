import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "../styles/Badge.css";
import "../styles/Badges.css";
import logo from "../assets/images/splat3.jpg";
import Badge from "../components/Badge";
import BadgesList from "../components/BadgesList";
const STATIC_DATA = [
  {
    id: 1,
    name: "Octoling",
    email: "Octo@tavio.com",
    title: "dps",
    twitter: "@octo"
  },
  {
    id: 2,
    name: "Squid 1",
    email: "Octo@tavio.com",
    title: "dps",
    twitter: "@sqd1"
  },
  {
    id: 3,
    name: "Squid 2",
    email: "Octo@tavio.com",
    title: "dps",
    twitter: "@sqd2"
  }
];

export default class Badges extends Component {
  state = {
    data: STATIC_DATA
  };

  render() {
    return (
      <div>
        <Navbar />

        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={logo} alt="logo" />
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <a href="/badges/new" className="btn btn-primary">
              New Badge
            </a>
          </div>
        </div>

        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList badges={this.state.data} />
          </div>
        </div>
      </div>
    );
  }
}
