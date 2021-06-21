import React from 'react';
import Navbar from './component/Navbar'
import Patients from './component/Patients'

import Appointment from './component/Appointment'
import Patient from './component/Patient'
import Drugs from './component/Drugs'
import EditForm from './component/EditForm'
import PostForm from'./component/PostForm'

import AddDrug from './component/AddDrug'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'

import Pres from './component/Pres'
import EditApp from './component/EditApp'
import EditDrug from './component/EditDrug'
import Login from './component/Login'

import LogOut from './component/LogOut'
function App() {
  return (
    <Router>
<div >


 <Route exact path="/"  component={Login}/>
 
 <Route path ="/EditDrug/:id" component={EditDrug} />
   <Route path ="/AddDrug" component={AddDrug} />
   <Route path ="/EditApp/:id" component={EditApp} />
   < Route  path="/Patients"  component={ Patients }/>
   < Route path="/Appointment" component={ Appointment }/>
   <Route path ="/patient/:id" component={Patient} />
   <Route path ="/Drugs" component={Drugs} />
   <Route path ="/EditForm/:id" component={EditForm} />
   <Route path="/PostForm" component={PostForm}/>
<Route  path="/LogOut"  component={LogOut}/>
    <Route path="/Pres/:id" component={Pres}/>
</div>
</Router>
  );
}

export default App;
