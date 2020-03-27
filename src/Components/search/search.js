import React, { Component } from 'react'

export default class search extends Component {
    constructor(props) {
        super(props)
       
        this.state = {
            
            data: []
           
        }
        this.handleChange = this.handleChange.bind(this);
        props={
            data:[]
        }
       
    }
    handleChange(event) {
        this.setState({data: event.target.value});
      
      }
    render() {
        return (
            <div>
            <form>
                <label>
                Name:
                <input type="text" name="name" value={this.state.data} onChange={this.handleChange} />
                </label>
              
            </form> 
            </div>
        )
    }
}
