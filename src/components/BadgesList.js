import React, { Component } from "react";
import "../styles/Badge.css";
import logo from "../assets/images/splat4.jpg";
import avatar from "../assets/images/splat2.jpg";
import {Link } from "react-router-dom";
export default class BadgesList extends Component {
  render() {
    if (this.props.badges.length === 0 ){
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      )
    }
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li className="Badge-list__container" key={badge.id}>
              <div className="row">
                <div className="col-4">
                  <img className="Badge__avatar avatar" src={badge.avatarUrl} alt="avatar" />
                </div>
                <div className="col-8">
                  <p>{badge.firstName}</p>
                  <p>{badge.lastName}</p>
                  <p>{badge.email}</p>
                  <p>{badge.jobTitle}</p>
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
