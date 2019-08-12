import React, { Component } from "react";

export default class BadgeForm extends Component {
//   state = {

//   };
//   state = {
//     name: "",
//     email: "",
//     title: "",
//     twitter: ""
//   };

  handleChange = e => {
    // console.log({
    //   name: e.target.name,
    //   value: e.target.value
    // });

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    console.log("Button clicked");
  };

  handleSubmit = e => {
    console.log("Submit form");
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>New</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="name"
              value={this.props.formValues.name}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label>Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="title"
              value={this.props.formValues.title}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>

          <button
            type="submit"
            onClick={this.handleClick}
            className="btn btn-primary"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}
