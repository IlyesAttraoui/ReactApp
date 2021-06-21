import axios from 'axios';
import {Link} from "react-router-dom"
import React ,{Component} from 'react'
import './Editform.css'
import Navbar from './Navbar'
class EditForm extends Component {

  state={
     posts:[],

   }
   add=(e)=>{
      const url = 'http://127.0.0.1:8000/patients/'+this.props.match.params.id+"/"
      const formData = new FormData();

      formData.append('name', document.querySelector('#name').value);
      formData.append('birthdate', document.querySelector('#birthdate').value);
      formData.append('wilaya', document.querySelector('#wilaya').value);
      formData.append('phone', document.querySelector('#phone').value);


      axios.put(url, formData)
      .then(resp => {
          console.log(resp.data);
   alert('patient modified')

      });


  }



   componentDidMount=()=>{
     axios.get("http://127.0.0.1:8000/patients/"+this.props.match.params.id+"/")
     .then((response)=>{
       console.log(response)
       this.setState({  posts:response.data})

     })}

render(){
    const {posts}= this.state

  return (
<div>
<Navbar/>
  <div className="edt">
  <div className="hededt">
  <h2>edit patient</h2>

  </div>
  <div className='edtForm'>
   <form className='pst' ><br/>
   <div className="inputtfield">
<label for="name">name: </label>
     <input  className="input" defaultValue={posts.name}type="text" id="name"/><br/>
     </div>
     <div className="inputtfield">
<label for="birthdate">birthdate: </label>
     <input className="input"type="date" defaultValue={posts.birthdate} id="birthdate"/><br/>
      </div>
     <div className="inputtfield">
<label for="wilaya">wilaya: </label>
     <input className="input"defaultValue={posts.wilaya} type="text" id="wilaya" /><br/>
      </div>
     <div className="inputtfield">
<label for="phone:">phone: </label>
     <input className="input" defaultValue={posts.phone} type="text" id="phone" /><br/>
      </div>


  </form>
  <div className="edtbtn">
  <button type="button" onClick={this.add}>enregistrer</button>
  <Link to={"/Patient/"+posts.id}><button id="btnn" type="button" >cancel</button></Link>
  </div>
  </div>
    </div>
    </div>

  )}
}

export default EditForm;
