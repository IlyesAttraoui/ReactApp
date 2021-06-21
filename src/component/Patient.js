import React , {Component} from 'react'
import './patienteee.css'
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import {Link,Redirect} from "react-router-dom"
import Navbar from './Navbar'
import Swal from'sweetalert2';

class Patient extends Component {
  constructor(props){
    super(props)
  const x=  localStorage.getItem("x")
  let loggedIn=true
  if (x== null){
loggedIn=false
  }
this.  state={
     posts:[],
     consul:[],
     consule:[],
     pres:[],
     sup:false,
loggedIn

}}



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
       this.setState({sup:true})
      })
    }


   deletCon=(conId)=>{
     if(localStorage.getItem("y")==="doctor"){
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
   this.deletcon(conId)
   }
   })
 }
else{
  alert("You are not authorized")
}}
   deletcon=(conId)=>{
       axios.delete("http://127.0.0.1:8000/consultations/"+conId+"/")
       .then(response=>{
         if (response.data =! null){

        this.setState({
          consul:this.state.consul.filter(consul=>consul.id !== conId)
        })
      }
    })
   }


     componentDidMount=()=>{

       axios.get("http://127.0.0.1:8000/patients/"+this.props.match.params.id+"/")
       .then((response)=>{

      this.setState({consul:response.data.consultations,
      posts:response.data,

    })


         })



       }



render(){

  const {posts,consul,pres,show}= this.state

  if(this.state.loggedIn=== false){
  return  <Redirect to="/"/>
  }
  if(this.state.sup){
    return <Redirect to="/Patients"/>
  }

return(
<div>
<Navbar/>
<div className='cons'>

   <div className="left-sid">

      <div className="hederConsul">
         <h3> Consultations</h3>
         <Link to ={'/Pres/'+posts.id}> <button className="addCons">Add</button> </Link>

       </div>
 <div  ClassName="hrpatient" >
 <hr/>
 </div>



      <div>

{
consul.map(consul=>
<div className='cns' key={consul.id}>
<div className="head"><div className="cnsDate">{consul.date}</div>
   <div className='icondeletApp'><i class="fas fa-trash-alt"  onClick={this.deletCon.bind(this,consul.id)}></i>
</div>
</div>
<div><h4>Type</h4><p>{consul.type}</p></div>
<div><h4>description</h4><p>{consul.description}</p></div>
<div><h4>outcome</h4><p>{consul.outcome}</p></div>
<div><h4>prescription</h4><div className="prescr">
<Table  bordered>
<thead>
<tr>

  <th>drug</th>
  <th>quantity</th>
  <th>no of times a day</th>
</tr>
</thead>
<tbody>
{consul.prescription_fields.map(prescription_fields=>
<tr >

<td className='col22'>{prescription_fields.drug.scientific_name}</td>
  <td className='col22'>{prescription_fields.quantity}</td>
    <td className='col22'>{prescription_fields.times_per_day}</td>


</tr>



  )}

</tbody>
</Table>
</div></div>


</div>  )}
        </div>




</div>

<div className='patientinfoo'>


{

  <ul className="patient"key={posts.id}>

      <li> <img className="imagePatient" src={posts.photo} /></li>
      <div className='listinfo'>
      <p>name</p>
      <li >  {posts.name} </li>
      <p>Birthdate</p>
      <li >{posts.birthdate} </li>
      <p>phone</p>
      <li >{posts.phone} </li>
      <p>wilaya</p>
      <li> {posts.wilaya}</li>

   </div>
   <div className="hedPat">
   <Link to ={'/EditForm/'+posts.id}> <button className="editCons">Edit</button> </Link>
  <button className="deletPat" onClick={this.handelDelet.bind(this,posts.id)}>delet</button>
       </div>
  </ul>
}



</div>


</div>

</div>

)
}}
export default Patient;
