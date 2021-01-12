import React, { Component } from "react";
import mt from "../../Components/nav/textfx.png";
import {Redirect} from 'react-router-dom'
import './Home.css'
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      keyword: "",
      Search:false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ keyword: event.target.value });
  }

  handlesubmit() {
   this.setState({
     Search:true
   })
    // localStorage.setItem("Search", keyword);
  }

  render() {
    const { keyword ,Search } = this.state;
    if(Search===true){
      if(keyword!==''){
        return <Redirect to={`/Search/${keyword}`}/>
      }
      else{
        alert('Please Add KeyWord to Search')
      }
      
    }
    return (
      <div className='home'>
          <div class="Title-con">
            <center>
            <img src={mt} class="img-fluid" alt="..." />
           </center>
          </div>
        
          <form class="myform" onSubmit={this.handlesubmit}>
           
            <input class="form-control home-search mr-0" type="text" placeholder="Search" aria-label="Search" value={this.state.keyword} onChange={this.handleChange}/>
            <button type="submit" class="btn ml-1" onClick={this.handlesubmit}><i class="fas fa-chevron-right"></i></button>
       
          </form>
      </div>
    );
  }
}
