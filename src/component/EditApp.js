import axios from 'axios';
import {Link} from "react-router-dom"
import React ,{Component} from 'react'
import './EditApp.css'
import Navbar from './Navbar'
class EditApp extends Component {
  constructor(props){
    super(props)
    this.state={
      posts:[],
    patient_name:"",
      time:'',
      date:''
    }
  }

  changeNameAppEd=(e)=>{
    this.setState({patient_name:e.target.value})
  }

  changeTimeAppoiED=(e)=>{

    this.setState({time:e.target.value})}

  dateChangeED=(e)=>{
    this.setState({date:e.target.value})
  }



     addd=(e)=>{
        const url = 'http://127.0.0.1:8000/appointments/'+this.props.match.params.id+"/"
        const formData = new FormData();

        formData.append('patient_name', document.querySelector('#patient_name').value);
        formData.append('time', document.querySelector('#time').value);
          formData.append('date', document.querySelector('#date').value);


        axios.put(url, formData)
        .then(resp => {
            console.log(resp.data);
            alert("app modified");


        });


    }



   componentDidMount=()=>{
     axios.get("http://127.0.0.1:8000/appointments/"+this.props.match.params.id+"/")
     .then((response)=>{
       console.log(response)
       this.setState({  posts:response.data})

     })}

     verifier=(e)=>{
       if(this.state.time==='08:00' || this.time==='08:30' ||this.state.time==='09:00' ||this.state.time==='09:30' ||
         this.state.time==='10:00' ||this.state.time==='10:30' ||this.state.time==='11:00' ||this.state.time==='11:30' ||
       this.state.time==='12:00' ||this.state.time==='12:30' ||this.state.time==='13:00' ||this.state.time==='13:30' ||
     this.state.time==='14:00' ||this.state.time==='14:30' ||this.state.time==='15:00' ||this.state.time==='15:30')
     {
       this.addd(e)
        }
        else{

          alert('date invalid')
        }

     }

render(){
    const {posts}= this.state

  return (
<div>
<Navbar/>
  <div className="edtApp">

  <div className="hededtApp">
  <h2>Edit appointment</h2>

  </div>
  <div className='edtFormApp'>
   <form className='pstApp' ><br/>
   <div className="inputtfieldApp">
<label for="patient_name">patient_name: </label>
     <input  className="input" defaultValue={posts.patient_name}type="text" id="patient_name"onChange={this.changeNameAppEd}/><br/>
     </div>
     <div className="inputtfieldApp">
<label for="time">time: </label>
     <input className="input"type="time" defaultValue={posts.time} id="time"onChange={this.changeTimeAppoiED}/><br/>
      </div>

      <div className="inputtfieldApp">
     <label for="date">date: </label>
      <input className="input"type="date" defaultValue={posts.date} id="date"onChange={this.dateChangeED}/><br/>
       </div>

  </form>
  <div className="edtbtnApp">
<button type="button" onClick={this.verifier}>enregistrer</button>
  <Link to={"/Appointment"}><button id="btnn" type="button" >cancel</button></Link>
  </div>
  </div>
    </div>
    </div>

  )}
}

export default EditApp;
