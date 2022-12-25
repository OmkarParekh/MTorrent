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
       
          const data = await Axios.get(`${window.url}/Popular/movies/day`);
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
                <h1 className="text-white">Popular</h1>
                </center>
                <div className="select mt-2 mb-2" style={{margin:'auto'}}>
                 
                <select className="My-Select mr-1" onChange={(e)=>{
                  this.setState({
                    key:e.target.value
                  })
                }}>
              
                <option selected value="movies" className="text-dark">Movies</option>
                <option value="music" className="text-dark">Music</option>
                <option value="apps" className="text-dark">Apps</option>
                <option value="games" className="text-dark">Games</option>
                <option value="anime" className="text-dark">Anime</option>
                <option value="tv" className="text-dark">Tv</option>
                <option value="other" className="text-dark">Other</option>
                </select>
                <select className="My-Select" onChange={(e)=>{
                  this.setState({
                    when:e.target.value
                  })
                }}>
                <option selected className="text-dark" value='day'>Today</option>
                <option value="week" className="text-dark">Week</option>
               
                </select>
                <button className='btn ml-1' onClick={this.search}><i className="fas fa-chevron-right"></i></button>
                
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

              <div className="d-flex justify-content-center">
              <div className="spinner-border text-white" style={{width:'3rem',height:'3rem'}} role="status">
              <span className="sr-only">Loading...</span>
              </div>
              </div>

              }
              </div>
                </div>
        )
    }
}
