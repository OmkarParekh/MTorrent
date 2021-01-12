import React, { Component } from 'react'
import Axios from 'axios'
import Table from '../../Components/Table/Table'
import './Popular.css'


export default class Popular extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          Loading:false,
          key:'movies',
          when:'day'
         
        };
        this.search=this.search.bind(this)
      }
      async componentDidMount() {
       
          const data = await Axios.get(`https://mtorrent-z.herokuapp.com/Popular/movies/day`);
          this.setState({
            data: data.data,
            Loading:true
          });
       
      }
      async search(){
        this.setState({
          Loading:false
        })
        const {key,when}=this.state
        const data = await Axios.get(`https://mtorrent-z.herokuapp.com/Popular/${key}/${when}`);
        console.log(data);
        this.setState({
          data: data.data,
          Loading:true
        });
      }
    render() {
        
       
       
        return (
            <div>
          
          <div className="headers">
                <center>
                <h1 class="text-white">Popular</h1>
                </center>
                <div className="select mt-2 mb-2" style={{margin:'auto'}}>
                 
                <select class="My-Select mr-1" onChange={(e)=>{
                  this.setState({
                    key:e.target.value
                  })
                }}>
              
                <option selected value="movies" class="text-dark">Movies</option>
                <option value="music" class="text-dark">Music</option>
                <option value="apps" class="text-dark">Apps</option>
                <option value="games" class="text-dark">Games</option>
                <option value="anime" class="text-dark">Anime</option>
                <option value="tv" class="text-dark">Tv</option>
                <option value="other" class="text-dark">Other</option>
                </select>
                <select class="My-Select" onChange={(e)=>{
                  this.setState({
                    when:e.target.value
                  })
                }}>
                <option selected class="text-dark" value='day'>Today</option>
                <option value="week" class="text-dark">Week</option>
               
                </select>
                <button className='btn ml-1' onClick={this.search}><i class="fas fa-chevron-right"></i></button>
                
                </div>
                
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
