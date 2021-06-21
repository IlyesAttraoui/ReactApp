import React, { Component } from 'react'
import axios from 'axios'
import login from './login.css'
import {Redirect} from 'react-router-dom';
class Login extends Component {
	constructor(props) {
		super(props)
let loggedIn=false
		this.state = {
			username: '',
			password: '',

 loggedIn
};
this.submitHandler = this.submitHandler.bind(this);
this.changeHandler = this.changeHandler.bind(this);
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://127.0.0.1:8000/api/log_in/', this.state)
			.then(response => {
        localStorage.setItem("x",response.data.refresh)

        if(this.state.username=="doctor"){
          const xe=1
          console.log("hello doc")
          localStorage.setItem("y","doctor")
  }
        this.setState({
          loggedIn:true
        })

			})
			.catch(error => {
				alert("mot de pass or username incorect")
			})
	}
  logForm(e){
fetch("http://127.0.0.1:8000/api/log_in/",{

 method:"POST",
 body:JSON.stringify(this.state)
})


  }

	render() {
		const { username, password } = this.state
    if(this.state.loggedIn){
      return <Redirect to="/Patients"/>

    }
		return (





      <div className="container">


         <div className="forme">
         <div className='iconn'><i class="fas fa-user-md"></i></div>



     <div className='right'>
          <form onSubmit={this.submitHandler}>
               <h1> easydoc </h1>
                <div className="inputwithicone">
                 <i class="fas fa-user"></i>
                 <input
                   type="text"
                   name="username"
                   placeholder="username"
                   value={username}
                   onChange={this.changeHandler}
                 />
                 </div>
                 <div className="inputwithicon">
                  <i class="fas fa-lock"></i>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={this.changeHandler}
                  />
                  </div>

                 <div className="control">
                 <input type="submit" value="login" />

                 </div>
             </form>
             </div>
             </div>
       </div>

		)
	}
}

export default Login
