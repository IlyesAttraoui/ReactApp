import React , {Component} from 'react';
import Navbar from './Navbar'
import axios from 'axios';
import './AddDrug.css'
import Swal from'sweetalert2';

import {Link,Redirect} from "react-router-dom"


class AddDrug extends Component {
  constructor(props){
    super(props)
    const x=  localStorage.getItem("x")
    let loggedIn=true
    if (x== null){
  loggedIn=false
    }
    this.state={

      loggedIn

    }
  }

             addDrg=(e)=>{

                const url = 'http://127.0.0.1:8000/drugs/'
                const formData = new FormData();

                formData.append('commercial_name', document.querySelector('#commercial_name').value);
                formData.append('scientific_name', document.querySelector('#scientific_name').value);

                axios.post(url, formData)
                .then(resp => {
                    console.log(resp.data);
                    alert("new drug")

                });


            }


render(){

  if(this.state.loggedIn=== false){
  return  <Redirect to="/"/>
  }
return(
<div>
<Navbar/>
<div className='addDrugAll'>


    <div className='addDrugform'>
    <div className="hededtDrug">
    <h2>add Drug</h2>

    </div>
     <form className='pstDRug' ><br/>
     <div className="input_fieldDrug">
<label for="commercial_name">commercial_name: </label>
        <input type='text' placeholder='Commercial name' name='commercial_name' id="commercial_name"
         /><br/>
       </div>
       <div className="input_fieldDrug">
<label for="scientific_name">scientific_name: </label>
    <input  type='text'  placeholder='Scientific name' name ='scientific_name ' id='scientific_name'
    /><br/>
        </div>


    </form>
    <div className="edtbtnDrug">
    <button type="button" onClick={this.addDrg}>add</button>

    <Link to={"/Drugs"}><button id="btnn" type="button" >cancel</button></Link>

    </div>
    </div>
    </div>
    </div>

)
}}
export default AddDrug;
