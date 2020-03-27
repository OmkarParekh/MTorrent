import React, { Component } from 'react'
import Axios from 'axios'
import "./full.css";
const baseURL = `https://torrentz-api.herokuapp.com`;
Axios.defaults.baseURL = baseURL;
export default class Trending extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
         
        };
      }
      async componentDidMount() {
       
          const res = await Axios.get(`/trending`);
          const data = res.data;
          const setData = this.setState({
            data: data,
         
          });
          console.log(setData);
       
      }
    render() {
        const download = link => {
            Axios.get(`${baseURL}/torrent?link=${link}`)
              .then(({ data }) => window.open(data))
              .catch(err => console.log(err));
          };
        const { data } = this.state;
        return (
            <div>
        <br/>
        <br />
        <br />
        <center>
          <h1 class="text-white heading"> Trending For Today</h1>
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
        )
    }
}
