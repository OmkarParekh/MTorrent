import React, { Component } from "react";
import Axios from "axios";

// import swal from "sweetalert";
import Table from '../../Components/Table/Table'

export default class respage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      keyword: "",
      Loading:false
    };
  }
  async componentDidMount() {
    var keyword = this.props.match.params.keyword
    // console.log(keyword);
  try{
    const data = await Axios.get(`${window.url}/Search/${keyword}`);
    // console.log(data);
    this.setState({
      data: data.data,
      keyword: keyword,
      Loading:true
    });
  }
  catch(err){
    console.log(err);
  }
}
  render() {
 

    const { keyword } = this.state;
    return (
      <div >
       
        <center>
          <h1 className="text-white heading"> You Search For {keyword}</h1>
        </center>

        <div>
          { this.state.Loading===true?
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
    );
  }
}
