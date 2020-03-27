import React, { Component } from "react";
import Axios from "axios";
import "./full.css";
import swal from "sweetalert";
const baseURL = `https://torrentz-api.herokuapp.com`;
Axios.defaults.baseURL = baseURL;
export default class respage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      keyword: ""
    };
  }
  async componentDidMount() {
    var omkar = localStorage.getItem("Search");
    console.log(omkar);
    if (localStorage.getItem("Search")) {
      const res = await Axios.get(`/search/${omkar}`);
      const data = res.data;
      const setData = this.setState({
        data: data,
        keyword: omkar
      });
      console.log(setData);
    } else {
      swal("Search Box has been Identify Empty:", {}).then(omkar => {
        swal("Go to Home PAge:", {}).then(() => {
          window.location.replace("/");
        });
      });
    }
  }
  render() {
    const download = link => {
      Axios.get(`${baseURL}/torrent?link=${link}`)
        .then(({ data }) => window.open(data))
        .catch(err => console.log(err));
    };

    const { data, keyword } = this.state;
    return (
      <div>
        <br />
        <br />
        <br />
        <center>
          <h1 class="text-white heading"> You Search For {keyword}</h1>
        </center>

        <div>
          {Object.values(data).map(({ name, size, link }) => (
            <div className="container">
              <div class="p-3 my-3 border text-white" id="c1">
                <h1 className="search_title">{name}</h1>
                <h5 id="size">Size: {size}</h5>
                <button
                  type="button"
                  class="btn btn-outline-info waves-effect"
                  id="btn-download"
                  onClick={download.bind(this, link)}
                >
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
