import React , {Component} from 'react';

import axios from 'axios';
import './Drugs.css'
import Swal from'sweetalert2';

import {Link,Redirect} from "react-router-dom"
import Table from 'react-bootstrap/Table'
import Navbar from './Navbar'
class Drugs extends Component {
  constructor(props){
    super(props)
    const x=  localStorage.getItem("x")
    let loggedIn=true
    if (x== null){
  loggedIn=false
    }
  this.state={
     drg:[],
     loggedIn
   }}
   changeCommercial_name=(e)=>{
     this.setState({commercial_name:e.target.value})
   }
   changeScientific_name=(e)=>{
     this.setState({scientific_name:e.target.value})
   }
   AddDrg=(e)=>{
     e.preventDefault()

     axios.post('http://127.0.0.1:8000/drugs/',this.state)
     .then(response=>{

       this.godrg()
     }) .catch(err=>{

     })
   }
   componentDidMount=()=>{
     axios.get("http://127.0.0.1:8000/drugs/")
     .then((response)=>{
       console.log(response)
       this.setState({  drg:response.data})
     })}
     godrg=()=>{
       axios.get("http://127.0.0.1:8000/drugs/")
       .then((response)=>{
         console.log(response)
         this.setState({  drg:response.data})
       })}


     deletdrg=(drgId)=>{
     Swal.fire({
     title: 'Are you sure?',
     text: "You won't be able to revert this!",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Yes, delete it!'
     }).then((result) => {
     if (result.isConfirmed) {
     this.deletdrgs(drgId)
     }
     })
     }

     deletdrgs=(drgId)=>{
         axios.delete("http://127.0.0.1:8000/drugs/"+drgId+"/")
         .then(response=>{
           if (response.data =! null){

          this.setState({
            drg:this.state.drg.filter(drg=>drg.id !== drgId)
          })
        }
      })
     }
render(){
const {drg}=this.state
if(this.state.loggedIn=== false){
return  <Redirect to="/"/>
}
return(
  <div className='drg'>
  <Navbar/>
<div className="hede">
<h3> Drugs </h3>
<Link to={"/AddDrug"}><button className="addpatient">Add</button></Link>
</div>
<hr/>
<div className='alldrg'>
<div className='left-dr'>
<div className='tableDrg'>
<Table  striped bordered hover>
<thead>
<tr className="tableHeader" tableHeader>

<th colSpan="1"><div className='titlehederapp'><div>Commercial name</div></div></th>
<th colSpan='2'><div className='titlehederapp'><div className='fste' >Scientific name</div></div></th>

</tr>
</thead>
<tbody>
{
drg.map(drg=>
<tr key={drg.id}>
<td>{drg.commercial_name}</td>
<td className='col22'>{drg.scientific_name}</td>
<td>

<div className='icon'>
<div className='icondeletApp'><i class="fas fa-trash-alt" onClick={this.deletdrg.bind(this,drg.id)}></i></div>
<div className='iconEditApp'><Link to ={'/EditDrug/'+drg.id}><i class="far fa-edit"></i> </Link></div>

</div>


</td>
</tr>
)
}
</tbody>
</Table>
</div>
</div>

</div>
</div>
)
}}
export default Drugs;
