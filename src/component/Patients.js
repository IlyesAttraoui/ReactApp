import React , {Component} from 'react';
import Navbar from './Navbar'
import axios from 'axios';
import './Patients.css'
import Swal from'sweetalert2';

import {Link, Redirect} from "react-router-dom"


class Patients extends Component {
constructor(props){
  super(props)
  const x=  localStorage.getItem("x")
  let loggedIn=true
  if (x== null){
loggedIn=false
  }
  this.state={
    posts:[],
    show:false,
    loggedIn

  }
}

  handelDelet=(patientId)=>{
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
  this.deletpatient(patientId)
  }
})
}




 deletpatient=(patientId)=>{
     axios.delete("http://127.0.0.1:8000/patients/"+patientId+"/")
     .then(response=>{
       if (response.data =! null){

      this.setState({
        posts:this.state.posts.filter(posts=>posts.id !== patientId)
      })
    }
  })
}






   componentDidMount=()=>{
     axios.get("http://127.0.0.1:8000/patients/")
     .then((response)=>{
       console.log(response)
       this.setState({  posts:response.data})
     })}

render(){

  const {posts,show}= this.state
  if(this.state.loggedIn=== false){
  return  <Redirect to="/"/>
  }
return(
  <div>
  <Navbar/>
<div className="allPat">
<div className="hederPatient">
  <h3>Patents list</h3>
<Link to={"/PostForm"}><button className="addpatient">Add</button></Link>
  </div>
  <hr  />


  { posts.map(posts=>
    <ul className="patients"key={posts.id}>
        <li><Link to ={'/patient/'+posts.id}> <img className="imagePatent" src={posts.photo} /> </Link></li>
        <li className="name"><Link to ={'/patient/'+posts.id}>{posts.name} </Link><div className="wilaya">{posts.wilaya}</div> </li>
        <li className="phone"> <div className="phoneCouleur">phone</div> {posts.phone}</li>
        <li className="idPatient"> <div className="phoneCouleur">ID</div>{posts.id}</li>
        <li className="icondelet"><i class="fas fa-trash-alt" onClick={this.handelDelet.bind(this,posts.id)}></i></li>


    </ul>
  )
  }


           </div>
           </div>

)
}}
export default Patients;
