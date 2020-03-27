import React, { Component } from 'react'
import Axios from 'axios'
export default class myr extends Component {
    constructor(){
        super()
            this.state={
                data:[],
                load:0,
                keyword:""
            }
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    async componentDidMount(){
   
        const {keyword}=this.state
        console.log(typeof(keyword))
        if(keyword===""){}
        else{
        const res = await Axios.get(`http://3.7.5.138:8000/search/${keyword}`)
        const data = res.data;
        const setData = this.setState({
            data:data,
          
          
        });
        console.log(setData)
    }
      }
      handleChange(event) {
        this.setState({keyword: event.target.value});
      
      }
  handleSubmit(event) {

    event.preventDefault();
  }
        render() {
        return (
            <div>
            <div>
            <form onSubmit={this.handleSubmit}>
            <input type="Text" value={this.state.keyword} onChange={this.handleChange}  />
            <input type="submit" value="Submit" onClick={this.componentDidMount} />
            </form>
          </div>
            </div>
        )
    }
}
