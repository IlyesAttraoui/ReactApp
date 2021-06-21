import React , {Component} from 'react';
import './Appointment.css'
import axios from 'axios';
import Swal from'sweetalert2';
import Table from 'react-bootstrap/Table'
import {Link,Redirect} from "react-router-dom"
import Navbar from './Navbar'

class Appointment extends Component {
constructor(props){
  super(props)
  const x=  localStorage.getItem("x")
  let loggedIn=true
  if (x== null){
loggedIn=false
  }
  this.state={
    date:new Date().toISOString().split("T")[0],
    resdate:[],
  patient_name:"",
    time:'',
    loggedIn
  }
}





deletApp=(appointId)=>{
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
this.deletAppoi(appointId)
}
})
}


deletAppoi=(appointId)=>{
    axios.delete("http://127.0.0.1:8000/appointments/"+appointId+"/")
    .then(response=>{
      if (response.data =! null){

     this.setState({
       resdate:this.state.resdate.filter(resdate=>resdate.id !== appointId)
     })
   }
 })
}

changeNameAppoi=(e)=>{
  this.setState({patient_name:e.target.value})
}

changeTimeAppoi=(e)=>{

  this.setState({time:e.target.value})}

dateChange=(e)=>{
  this.setState({date:e.target.value})
}
verifier=(e)=>{
  if(this.state.time==='08:00' || this.state.time==='08:30' ||this.state.time==='09:00' ||this.state.time==='09:30' ||
    this.state.time==='10:00' ||this.state.time==='10:30' ||this.state.time==='11:00' ||this.state.time==='11:30' ||
  this.state.time==='12:00' ||this.state.time==='12:30' ||this.state.time==='13:00' ||this.state.time==='13:30' ||
this.state.time==='14:00' ||this.state.time==='14:30' ||this.state.time==='15:00' ||this.state.time==='15:30')
{
  this.Addappoin(e)
   }
   else{

     alert('date invalid')
   }

}


Addappoin=(e)=>{


  e.preventDefault()
  console.log(this.state)
  axios.post('http://127.0.0.1:8000/appointments/',this.state)
  .then(response=>{
    console.log(response)
    this.godate()
  }) .catch(err=>{
    console.log(err)
  })
}
componentDidMount=()=>{
  axios.get("http://127.0.0.1:8000/appointments/?date="+this.state.date)
  .then((response)=>{
    console.log(response)
    this.setState({  resdate:response.data})
  })}
godate=()=>{
  axios.get("http://127.0.0.1:8000/appointments/?date="+this.state.date)
  .then((response)=>{
    console.log(response)
    this.setState({  resdate:response.data})
  })}




render(){
  const {posts,show}= this.state
  if(this.state.loggedIn=== false){
  return  <Redirect to="/"/>
  }
const{resdate,date}=this.state
var minutesToAdd=30
return(
<div className="appointhr" >
<Navbar/>
<div className="hederAppoin">
  <h3>Appointment list</h3>
  <div>
  <input  type ='date' name= 'date'value={date} onChange={this.dateChange}/>
<button className="searchDate" onClick={this.godate}>go</button>
</div>
  </div>
  <hr/>
  <div className='all'>
  <div className='tableApp'>
        <Table  striped bordered hover >
    <thead>
      <tr className="tableHeader" tableHeader>

        <th colSpan="1"><div className='titlehederapp'><div>Patient</div></div></th>
        <th colSpan="2"><div className='titlehederapp'><div className='fste' >Time</div></div></th>

      </tr>
    </thead>
    <tbody>
    {
      resdate.map(resdate=>
<tr key={resdate.id}>
   <td>{resdate.patient_name}</td>
   <td className='col2'>{resdate.time}</td>
   <td>
   <div className='icon'>
  <div className='icondeletApp'> <i class="fas fa-trash-alt" onClick={this.deletApp.bind(this,resdate.id)}></i></div>
<div className='iconEditApp'><Link to ={'/EditApp/'+resdate.id}><i class="far fa-edit"></i> </Link></div>

   </div></td>



      </tr>
      )
    }
    </tbody>
  </Table>

</div>
  <div className='add'>
     <form onSubmit={this.verifier}>
  <div>   <input type='text' placeholder='patient name' name='patient_name' value={this.name} onChange={this.changeNameAppoi}/></div>
  <div>   <input className='timee' type='time'  name ='time 'value={this.time} onChange={this.changeTimeAppoi}/></div>
  <div>   <button type='submit'>Add</button></div>

     </form>
     <div>{this.displayDate}</div>
  </div>
  </div>

           </div>

)
}}
export default Appointment;
