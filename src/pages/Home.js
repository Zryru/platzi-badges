import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Home</h1>
        <Link to="badges">badges</Link>
      </React.Fragment>
    );
  }
}
