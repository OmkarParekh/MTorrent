import React, { Component } from 'react'
import Axios from 'axios'
export default class results extends Component {
     constructor(props) {
    super(props)
    this.state = {
        
        data: [],
        keyword:this.props.keyword
     
       
    }
  
    
}
async componentDidMount(){
   
    
    
   
    const res = await Axios.get(`http://3.7.5.138:8000/search/end`)
    const data = res.data;
    const setData = this.setState({
        data:data,
      
      
    });
    console.log(setData)
}
  

 

    render() {
        const {data}=this.state
        return (
         
         
            <div>

 {
          Object.values(data).map(({name,size,link})=>
          <div>
          
          <div>{name}</div>
          <div>{size}</div>
          

          </div>)
        }   
            </div>
        )
    }



}
