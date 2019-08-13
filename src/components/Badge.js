import React from "react";

import logo from "../assets/images/splat4.jpg";
import avatar from "../assets/images/splat2.jpg";
import "../styles/Badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img className="Badge__logo" src={logo} alt="logo" />
        </div>

        <div className="Badge__section-name">
          <img className="Badge__avatar" src={avatar} alt="Avatar" />
          <h1>{this.props.name}</h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.email}</h3>
          <h3>{this.props.title}</h3>
          <div>{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">
          <p>#platzi</p>
        </div>
      </div>
    );
  }
}

export default Badge;
