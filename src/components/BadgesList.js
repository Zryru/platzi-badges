import React, { Component } from "react";

export default class BadgesList extends Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id}>
              <p>{badge.name}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}
