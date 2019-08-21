import React, { Component } from "react";
import "../styles/PageLoading.css";
import "../styles/loader.css";
export default class PageLoading extends Component {
  render() {
    return (
      <div className="PageLoading">
        <div className="lds-grid">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}
