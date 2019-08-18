import React, { Component } from "react";
import "../styles/Badge.css";
import logo from "../assets/images/splat4.jpg";
import avatar from "../assets/images/splat2.jpg";

export default class BadgesList extends Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li className="Badge-list__container" key={badge.id}>
              <div className="row">
                <div className="col-3">
                  <img className="Badge__avatar avatar" src={avatar} alt="avatar" />
                </div>
                <div className="col-9">
                  <p>{badge.name}</p>
                  <p>{badge.twitter}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}
