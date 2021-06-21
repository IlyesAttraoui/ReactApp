import React,{Component} from 'react'
import axios from 'axios';
import './Pres.css'
import {Link} from "react-router-dom"
import Navbar from './Navbar'
class Pres extends Component {
constructor(props){
  super(props)
}
state={
    datee:new Date().toISOString().split("T")[0],
  posts:[],
  pste:[],
  consultation:'',


}



  addC=(e,xe)=>{
    if(localStorage.getItem("y")==='doctor'){
    e.preventDefault()
     const url = 'http://127.0.0.1:8000/consultations/'
     const formData = new FormData();

     formData.append('date', document.querySelector('#date').value);
     formData.append('type', document.querySelector('#type').value);
     formData.append('description', document.querySelector('#description').value);
     formData.append('outcome', document.querySelector('#outcome').value);
     formData.append('patient', document.querySelector('#patient').value);


     axios.post(url, formData)
     .then(resp => {
      const consultation=resp.data.id;
      this.setState({consultation:consultation})
      alert('new consultation')
      this.addp(e)


      }
     );
 }
else{
  alert("You are not authorized")
}

}
addp=(e)=>{

if(this.time1=!""){
this.addp1(e)
}
if(this.time2=!""){
this.addp2(e)
}
if(this.time3=!""){
this.addp3(e)
}
if(this.time4=!""){
this.addp4(e)
}
if(this.time5=!""){
this.addp5(e)
}
if(this.time6=!""){
this.addp5(e)
}
if(this.time7=!""){
this.addp5(e)
}
if(this.time8=!""){
this.addp5(e)
}
}
 addp1=(e)=>{
   const url = 'http://127.0.0.1:8000/prescription_fields/'
   const formData = new FormData();

   formData.append('quantity', document.querySelector('#quantity1').value);
   formData.append('times_per_day', document.querySelector('#times_per_day1').value);
   formData.append('drug', document.querySelector('#drug1').value);
   formData.append('consultation',this.state.consultation);

   axios.post(url, formData)
   .then(resp => {

    }
   )
 }
 addp2=(e)=>{
   const url = 'http://127.0.0.1:8000/prescription_fields/'
   const formData = new FormData();

   formData.append('quantity', document.querySelector('#quantity2').value);
   formData.append('times_per_day', document.querySelector('#times_per_day2').value);
   formData.append('drug', document.querySelector('#drug2').value);
   formData.append('consultation',this.state.consultation);

   axios.post(url, formData)
   .then(resp => {

    }
   )
 }
 addp3=(e)=>{
   const url = 'http://127.0.0.1:8000/prescription_fields/'
   const formData = new FormData();

   formData.append('quantity', document.querySelector('#quantity3').value);
   formData.append('times_per_day', document.querySelector('#times_per_day3').value);
   formData.append('drug', document.querySelector('#drug3').value);
   formData.append('consultation',this.state.consultation);

   axios.post(url, formData)
   .then(resp => {

    }
   )
 }
 addp4=(e)=>{
   const url = 'http://127.0.0.1:8000/prescription_fields/'
   const formData = new FormData();

   formData.append('quantity', document.querySelector('#quantity4').value);
   formData.append('times_per_day', document.querySelector('#times_per_day4').value);
   formData.append('drug', document.querySelector('#drug4').value);
   formData.append('consultation',this.state.consultation);

   axios.post(url, formData)
   .then(resp => {

    }
   )
 }
 addp5=(e)=>{
   const url = 'http://127.0.0.1:8000/prescription_fields/'
   const formData = new FormData();

   formData.append('quantity', document.querySelector('#quantity5').value);
   formData.append('times_per_day', document.querySelector('#times_per_day5').value);
   formData.append('drug', document.querySelector('#drug5').value);
   formData.append('consultation',this.state.consultation);

   axios.post(url, formData)
   .then(resp => {

    }
   )
 }
 addp6=(e)=>{
   const url = 'http://127.0.0.1:8000/prescription_fields/'
   const formData = new FormData();

   formData.append('quantity', document.querySelector('#quantity6').value);
   formData.append('times_per_day', document.querySelector('#times_per_day6').value);
   formData.append('drug', document.querySelector('#drug6').value);
   formData.append('consultation',this.state.consultation);

   axios.post(url, formData)
   .then(resp => {

    }
   )
 }
 addp7=(e)=>{
   const url = 'http://127.0.0.1:8000/prescription_fields/'
   const formData = new FormData();

   formData.append('quantity', document.querySelector('#quantity7').value);
   formData.append('times_per_day', document.querySelector('#times_per_day7').value);
   formData.append('drug', document.querySelector('#drug7').value);
   formData.append('consultation',this.state.consultation);

   axios.post(url, formData)
   .then(resp => {

    }
   )
 }
 addp8=(e)=>{
   const url = 'http://127.0.0.1:8000/prescription_fields/'
   const formData = new FormData();

   formData.append('quantity', document.querySelector('#quantity8').value);
   formData.append('times_per_day', document.querySelector('#times_per_day8').value);
   formData.append('drug', document.querySelector('#drug8').value);
   formData.append('consultation',this.state.consultation);

   axios.post(url, formData)
   .then(resp => {

    }
   )
 }
 componentDidMount=()=>{

   axios.get("http://127.0.0.1:8000/patients/"+this.props.match.params.id+"/")
   .then((response)=>{
     this.setState({  posts:response.data})
console.log(response.data)

     })
     axios.get("http://127.0.0.1:8000/drugs/")
     .then((res)=>{
       this.setState({  pste:res.data})
       console.log(res.data)


       })

    }




    dateChangee=(e)=>{
      this.setState({date:e.target.value})
    }
      quantityChangee=(e)=>{
      this.setState({  quantity:e.target.value})
    }
    times_per_dayChangee=(e)=>{
    this.setState({  times_per_day:e.target.value})

  }
  times_per_dayChangee=(e)=>{
  this.setState({  times_per_day:e.target.value})

}

consultationchangee=(e)=>{
this.setState({  consultation:this.x})
console.log(this.consultation)
}
  render(){
    const {posts,datee,pste}=this.state


return(
<div>
<Navbar/>
<div className='PostFormConsG'>

<div className="hededt">
<h2>Add consultations</h2>

</div>
<form  className='PostFormmCons' >
<div className='pste' >
<label for='patient'>name</label>

<select name="patient" id="patient">
{
  <option key={posts.id} value={posts.id}>{posts.name}</option>
}
</select>
</div>

<div className='pste' >
   <label for='date'> date</label>
  <input  type ='date' id='date'name= 'date'value={datee} onChange={this.dateChange}/>
    </div>
    <div className='pste' >
    <label for='type'> type  </label>
    <input type='text'id='type' />
    </div>
    <div className='pste' >
     <label for='description'> description </label>
    <textarea  id="description"/>
      </div>
      <div className='pste'><label for='outcome'> outcome  </label>
    <textarea id='outcome' />
   </div>
   <h4>priscription</h4>
   <div className="pres">
   <div className="input_field">
 <label for="quantity">quantity: </label>
     <input  className="input" type="text" id="quantity1" required onChange={this.quantityChangee}/><br/>
     </div>
     <div className="input_field">
 <label for="times_per_day">times_per_day: </label>
     <input className="input"type="text" name='time1' id="times_per_day1"onChange={this.times_per_dayChangee}/><br/>
      </div>
<label for="drug">drug: </label>
      <select name="drug" id="drug1">
      {
    pste.map(pste=>  <option key={pste.id} value={pste.id} >{pste.commercial_name}</option>)
    }

      </select>

</div>
<div className="pres">
<div className="input_field">
<label for="quantity">quantity: </label>
  <input  className="input" type="text" id="quantity2" required onChange={this.quantityChangee}/><br/>
  </div>
  <div className="input_field">
<label for="times_per_day">times_per_day: </label>
  <input className="input"type="text" name='time2' id="times_per_day2"onChange={this.times_per_dayChangee}/><br/>
   </div>
<label for="drug">drug: </label>
   <select name="drug" id="drug2">
   {
 pste.map(pste=>  <option key={pste.id} value={pste.id} >{pste.commercial_name}</option>)
 }

   </select>

</div>
<div className="pres">
<div className="input_field">
<label for="quantity">quantity: </label>
  <input  className="input" type="text" id="quantity3" required onChange={this.quantityChangee}/><br/>
  </div>
  <div className="input_field">
<label for="times_per_day">times_per_day: </label>
  <input className="input"type="text" name='time3' id="times_per_day3"onChange={this.times_per_dayChangee}/><br/>
   </div>
<label for="drug">drug: </label>
   <select name="drug" id="drug3">
   {
 pste.map(pste=>  <option key={pste.id} value={pste.id} >{pste.commercial_name}</option>)
 }

   </select>

</div>
<div className="pres">
<div className="input_field">
<label for="quantity">quantity: </label>
  <input  className="input" type="text" id="quantity4" required onChange={this.quantityChangee}/><br/>
  </div>
  <div className="input_field">
<label for="times_per_day">times_per_day: </label>
  <input className="input"type="text" name='time4' id="times_per_day4"onChange={this.times_per_dayChangee}/><br/>
   </div>
<label for="drug">drug: </label>
   <select name="drug" id="drug4">
   {
 pste.map(pste=>  <option key={pste.id} value={pste.id} >{pste.commercial_name}</option>)
 }

   </select>

</div>
<div className="pres">
<div className="input_field">
<label for="quantity">quantity: </label>
  <input  className="input" type="text" id="quantity5" required onChange={this.quantityChangee}/><br/>
  </div>
  <div className="input_field">
<label for="times_per_day">times_per_day: </label>
  <input className="input"type="text" name='time5' id="times_per_day5"onChange={this.times_per_dayChangee}/><br/>
   </div>
<label for="drug">drug: </label>
   <select name="drug" id="drug5">
   {
 pste.map(pste=>  <option key={pste.id} value={pste.id} >{pste.commercial_name}</option>)
 }

   </select>

</div>
<div className="pres">
<div className="input_field">
<label for="quantity">quantity: </label>
  <input  className="input" type="text" id="quantity6" required onChange={this.quantityChangee}/><br/>
  </div>
  <div className="input_field">
<label for="times_per_day">times_per_day: </label>
  <input className="input"type="text" name='time6' id="times_per_day6"onChange={this.times_per_dayChangee}/><br/>
   </div>
<label for="drug">drug: </label>
   <select name="drug" id="drug6">
   {
 pste.map(pste=>  <option key={pste.id} value={pste.id} >{pste.commercial_name}</option>)
 }

   </select>

</div>
<div className="pres">
<div className="input_field">
<label for="quantity">quantity: </label>
  <input  className="input" type="text" id="quantity7" required onChange={this.quantityChangee}/><br/>
  </div>
  <div className="input_field">
<label for="times_per_day">times_per_day: </label>
  <input className="input"type="text" name='time7' id="times_per_day7"onChange={this.times_per_dayChangee}/><br/>
   </div>
<label for="drug">drug: </label>
   <select name="drug" id="drug7">
   {
 pste.map(pste=>  <option key={pste.id} value={pste.id} >{pste.commercial_name}</option>)
 }

   </select>

</div>
<div className="pres">
<div className="input_field">
<label for="quantity">quantity: </label>
  <input  className="input" type="text" id="quantity8" required onChange={this.quantityChangee}/><br/>
  </div>
  <div className="input_field">
<label for="times_per_day">times_per_day: </label>
  <input className="input"type="text" name='time8' id="times_per_day8"onChange={this.times_per_dayChangee}/><br/>
   </div>
<label for="drug">drug: </label>
   <select name="drug" id="drug8">
   {
 pste.map(pste=>  <option key={pste.id} value={pste.id} >{pste.commercial_name}</option>)
 }

   </select>

</div>

</form>
<div className="addbtn">
<button type="button" onClick={this.addC}>enregistrer</button>
<Link to={"/Patient/"+posts.id}><button id="btnn" type="button" >cancel</button></Link>
</div>
</div>

</div>
)}
}
export default Pres;
