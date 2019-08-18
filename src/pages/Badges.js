import React, { Component } from "react";
import "../styles/Badge.css";
import "../styles/Badges.css";
import logo from "../assets/images/splat3.jpg";
import Badge from "../components/Badge";
import BadgesList from "../components/BadgesList";

import { Link } from "react-router-dom";

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
  

  constructor(props) {
    super(props)
    console.log('1. constructor()');

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    console.log('3. componentDidMount()');
    
    this.timeout = setTimeout(() => {
      this.setState({
        data: STATIC_DATA,
      });
    }, 1500);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('5. componentDidUpdate()');

    console.log({
      prevProps: prevProps,
      prevState: prevState
    });

    console.log(
      {
        props: this.props,
        state: this.state
      }
    )
  }

  componentWillUnmount() {
    console.log('6. componentWillUnmount()');
    clearTimeout(this.timeout);
  }

  render() {
    console.log('2/4. Render()')
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={logo} alt="logo" />
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
        </div>

        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList badges={this.state.data} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
