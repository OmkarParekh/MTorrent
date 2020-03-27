import React, { Component } from "react";
import mt from "./textfx.png";
import "../../Pages/full.css";

export default class navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark fixed-top">
          <div class="container">
            <a class="navbar-brand" href="/">
              <img src={mt} height="30" alt="" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="/">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
