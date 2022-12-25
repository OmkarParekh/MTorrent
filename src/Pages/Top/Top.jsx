import React, { Component } from 'react'
import Axios from 'axios'
import './Top.css'
import Table from '../../Components/Table/Table'

export default class Top extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          Loading:false,
          key:'all',
         
        };
        this.search=this.search.bind(this)
      }
      async componentDidMount() {
       
          const data = await Axios.get(`${window.url}/Top/all`);
          this.setState({
            data: data.data,
            Loading:true
          });
       
      }
      async search(){
        this.setState({
          Loading:false
        })
        const {key}=this.state
        const data = await Axios.get(`https://mtorrent-z.herokuapp.com/Top/${key}`);
        console.log(data);
        this.setState({
          data: data.data,
          Loading:true
        });
      }
    render() {
 
        return (
            <div className='trending'> 
              <div className="headers">
                <center>
                <h1 class="text-white">Top</h1>
                </center>
                <center>
                <div className="" style={{margin:'auto'}}>
                 
                <select class="My-Select mr-1" onChange={(e)=>{
                  this.setState({
                    key:e.target.value
                  })
                }}>
                <option selected class="text-dark" >All</option>
                <option value="movies" class="text-dark">Movies</option>
                <option value="music" class="text-dark">Music</option>
                <option value="applications" class="text-dark">Apps</option>
                <option value="games" class="text-dark">Games</option>
                <option value="anime" class="text-dark">Anime</option>
                <option value="television" class="text-dark">Tv</option>
                <option value="other" class="text-dark">Other</option>
                </select>
            
                <button className='btn ml-1' style={{marginBottom:'7px'}} onClick={this.search}><i class="fas fa-chevron-right"></i></button>
                
                </div>
                </center>
                
                </div>
               
          
              <div>
              { 
              this.state.Loading===true?
              this.state.data.length===0?
              <center>
            <h1 className='text-white'>No Data Found</h1>
            </center>:
              <Table all={this.state.data}/>:

              <div class="d-flex justify-content-center">
              <div class="spinner-border text-white" style={{width:'3rem',height:'3rem'}} role="status">
              <span class="sr-only">Loading...</span>
              </div>
              </div>

              }
              </div>
            </div>
        )
    }
}
