import React, { Component } from 'react'
import Axios from 'axios'
import "./full.css";
const baseURL = `https://torrentz-api.herokuapp.com`;
Axios.defaults.baseURL = baseURL;

export default class Popular extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          ca1:[]
         
        };
        this.handleChange = this.handleChange.bind(this);
      }
      async componentDidMount() {
          
       
         
       
      }
      handleChange(ca){
        

        const ca2=ca.target.value;
        console.log(ca2)
       
        if(ca2==="movies"){
            Axios.get(`/popular/${ca2}/d`)
            .then(({data})=>{
                this.setState({
                    data:data
                })
           
            })
        }
        else if(ca2==="music"){
            Axios.get(`/popular/${ca2}/d`)
            .then(({data})=>{
                this.setState({
                    data:data
                })
            })
        }
        else if(ca2==="apps"){
            Axios.get(`/popular/${ca2}/d`)
            .then(({data})=>{
                this.setState({
                    data:data
                })
            })
        }
        else if(ca2==="games"){
            Axios.get(`/popular/${ca2}/d`)
            .then(({data})=>{
                this.setState({
                    data:data
                })
            })
        }
        else if(ca2==="anime"){
            Axios.get(`/popular/${ca2}/d`)
            .then(({data})=>{
                this.setState({
                    data:data
                })
            })
        }
        else if(ca2==="tv"){
            Axios.get(`/popular/${ca2}/d`)
            .then(({data})=>{
                this.setState({
                    data:data
                })
            })
        }
        else{
            
        }
        

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
            <br /><center>
            <select class=" browser-default custom-select-lg text-white" onChange={this.handleChange}>
            <option selected class="text-dark" disabled>Catagory</option>
            <option value="movies" class="text-dark">Movies</option>
            <option value="music" class="text-dark">Music</option>
            <option value="apps" class="text-dark">Apps</option>
            <option value="games" class="text-dark">Games</option>
            <option value="anime" class="text-dark">Anime</option>
            <option value="tv" class="text-dark">Tv</option>
            </select>
            
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
