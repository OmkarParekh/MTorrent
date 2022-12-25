import React, { Component } from 'react'
import Axios from "axios";
import './Table.css'

export default class Table extends Component {
     constructor(props){
          super(props)
          this.state={
               data:this.props.all
          }
     }
     magnet(link){
          Axios.get(`${window.url}/Magnet/link?link=${link}`)     
          .then(( data )=>{
          //    console.log(data.data.Magnetlink)
               window.open(data.data.Magnetlink)
          }) 
        
          .catch(err => console.log(err));
     }
     render() {       
          return (
               <div className="table-responsive">
               <table className="table table-bordered text-white   ">
               <thead>
                 <tr>
                   <th scope="col">#</th>
                   <th scope="col">Name</th>
                   <th scope="col">Seed</th>
                   <th scope="col">Leeches</th>
                   <th scope="col">Size</th>
                   <th scope="col">Link</th>
                 </tr>
               </thead>
               <tbody>
               {
                    
                    this.state.data.map((res,i)=>(
                         <tr>
                         <th scope="row">{i+1}</th>
                         <td>{res.Name}</td>
                         <td>{res.seed}</td>
                         <td>{res.leeches}</td>
                         <td>{res.size}</td>
                         <td><button className={'btn'} onClick={()=>{this.magnet(res.link)} }>Click Here</button></td>
                     
                       </tr>
                    ))
               }
                
               </tbody>
             </table>
             </div>
          )
     }
}
