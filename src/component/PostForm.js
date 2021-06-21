import axios from 'axios';
import './PostForm.css'
import React ,{Component} from 'react'
import Patients from './Patients'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
class PostForm extends Component {
state={
  posts:[],
}
           add=(e)=>{

              const url = 'http://127.0.0.1:8000/patients/'
              const formData = new FormData();

              formData.append('name', document.querySelector('#name').value);
              formData.append('birthdate', document.querySelector('#birthdate').value);
              formData.append('wilaya', document.querySelector('#wilaya').value);
              formData.append('phone', document.querySelector('#phone').value);
              formData.append('photo', document.querySelector('#photo').files[0]);

              axios.post(url, formData)
              .then(resp => {
                  console.log(resp.data);
                  alert("new patient")

              });


          }

render(){
const {posts}=this.state
  return (
<div>
<Navbar/>
    <div className='PostForm'>

    <div className="hededt">
    <h2>add patient</h2>

    </div>
     <form className='pst' ><br/>
     <div className="input_field">
<label for="name">name: </label>
       <input  className="input" type="text" id="name" required/><br/>
       </div>
       <div className="input_field">
<label for="birthdate">birthdate: </label>
       <input className="input"type="date"  id="birthdate"/><br/>
        </div>
       <div className="input_field">
<label for="wilaya">wilaya: </label>
       <input className="input" type="text" id="wilaya" /><br/>
        </div>
       <div className="input_field">
<label for="phone:">phone: </label>
       <input className="input" type="numbre" id="phone" /><br/>
        </div>
       <div className="input_field">
<label for="photo">photo: </label>
        <input className="input" type="file" id="photo" /><br/>
         </div>
    </form>
    <div className="edtbtn">
    <button type="button" onClick={this.add}>add</button>

    <Link to={"/Patients"}><button id="btnn" type="button" >cancel</button></Link>

    </div>
    </div>
    </div>

  )}
}

export default PostForm;
