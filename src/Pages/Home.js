import React, { Component } from "react";
import mt from "../Components/nav/textfx.png";
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      keyword: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ keyword: event.target.value });
  }

  handlesubmit() {
    const { keyword } = this.state;
    localStorage.setItem("Search", keyword);
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <center id="id_center">
          <div class="card  text-white">
            <img src={mt} class="card-img img-fluid" alt="..." />
            <div class="card-img-overlay"></div>
          </div>
          <br />

          <div class="active-cyan-3 active-cyan-4 mb-4">
            <input
              class="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={this.state.keyword}
              onChange={this.handleChange}
            />
          </div>
          <a href="/Search">
            <button
              type="button"
              class="btn btn-outline-info waves-effect"
              onClick={this.handlesubmit}
            >
              Search
            </button>
          </a>
        </center>

        {/* <form>
            <input type="Text" value={this.state.keyword} onChange={this.handleChange} />
     
            <input type="button" value="Search" onClick={this.handlesubmit} />
            <a href="/search" > heklo</a>

            </form> */}
      </div>
    );
  }
}
