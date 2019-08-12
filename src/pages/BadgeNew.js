import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "../styles/BadgeNew.css";
import logo from "../assets/images/splat3.jpg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

export default class BadgeNew extends Component {
  state = {
    form: {
      name: '',
      email: '',
      title: '',
      twitter: ''
    }
  };

  handleChange = e => {
    // const nextForm = this.state.form;
    // nextForm[e.target.name] = e.target.value;
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

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
              <Badge
                name={this.state.form.name}
                email={this.state.form.email}
                title={this.state.form.title}
                twitter={this.state.form.twitter}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
