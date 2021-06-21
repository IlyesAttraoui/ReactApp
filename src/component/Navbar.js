import React from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar =()=>{

return(
<div className='wrapper'>
       <div className='sidebar '>
       <div className='heder'>
       <i class="fas fa-user-nurse"></i>
       <h2>esydoc</h2>
       </div>

      <div className='navLinks'>
     <ul >
<Link  to ="/Patients"><li className="lien"><p><i class="fas fa-folder-plus"></i><br/>PATIENTS</p></li></Link>
<Link to ="/Appointment" > <li className="lien"><p><i class="far fa-calendar-check"></i><br/>APPOINTEMENT</p></li></Link>
<Link to ="/Drugs"><li className="lien"><p><i class="fas fa-skull-crossbones"></i><br/>DRUGS</p></li></Link>

<Link to="/LogOut"><li className="logout"><p ><i class="fas fa-sign-out-alt"></i><br/>LOGOUT</p></li></Link>

    </ul>
      </div>
      </div>

</div>

)
}

export default Navbar ;
