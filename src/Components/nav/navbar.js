import React, { Component } from "react";
import mt from "./textfx.png";
import { Link } from 'react-router-dom'
import "../../App.css";

export default class navbar extends Component {
  render() {

    return (
      <div>
        <nav className="navbar navbar-dark ">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src={mt} height="30" alt="" />

            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Top">
                    Top
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Trending">
                    Trending
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Popular">
                    Popular
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
