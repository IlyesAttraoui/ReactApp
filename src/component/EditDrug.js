import React , {Component} from 'react';

import axios from 'axios';
import './AddDrug.css'
import Swal from'sweetalert2';

import {Link} from "react-router-dom"

import Navbar from './Navbar'
class AddDrug extends Component {

state={
  drugsSelected:[]
}
             adddDrg=(e)=>{

                const url = 'http://127.0.0.1:8000/drugs/'+this.props.match.params.id+'/'
                const formData = new FormData();

                formData.append('commercial_name', document.querySelector('#commercial_name').value);
                formData.append('scientific_name', document.querySelector('#scientific_name').value);

                axios.put(url, formData)
                .then(resp => {
                    console.log(resp.data);
                    alert("drug modified")

                });


            }


               componentDidMount=()=>{
                 axios.get("http://127.0.0.1:8000/drugs/"+this.props.match.params.id+"/")
                 .then((response)=>{
                   console.log(response)
                   this.setState({  drugsSelected:response.data})

                 })}


render(){
const {drugsSelected}= this.state

return(
<div>
<Navbar/>
<div className='addDrugAll'>


    <div className='addDrugform'>
    <div className="hededtDrug">
    <h2>edit drug</h2>

    </div>
     <form className='pstDRug' ><br/>
     <div className="input_fieldDrug">
<label for="commercial_name">commercial_name: </label>
        <input type='text'name='commercial_name' id="commercial_name"defaultValue={drugsSelected.commercial_name}
         /><br/>
       </div>
       <div className="input_fieldDrug">
<label for="scientific_name">scientific_name: </label>
    <input  type='text'  name ='scientific_name ' id='scientific_name'defaultValue={drugsSelected.scientific_name}
    /><br/>
        </div>


    </form>
    <div className="edtbtnDrug">
    <button type="button" onClick={this.adddDrg}>enregistrer</button>

    <Link to={"/Drugs"}><button id="btnn" type="button" >cancel</button></Link>

    </div>
    </div>
    </div>
    </div>

)
}}
export default AddDrug;
