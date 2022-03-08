import  { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
export default class Nav extends Component {
  render() {
    return <>
    
<nav className="navbar navbar-expand-lg " >
  <div className="container">
    <Link className=" navbar-brand text-light" activeClassName="active" to="STARTREACT">START REACT</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fa-solid fa-align-justify fs-1 text-center"></i>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
  
        <li className="nav-item">
          <NavLink className=" nav-link vip" activeClassName="active" aria-current="page"  to="/PORTFOLIO">PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className= " nav-link vip" activeClassName="active" aria-current="page" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className=" nav-link vip " activeClassName="active" aria-current="page" to="/contact">Contact</NavLink>
        </li>
     
     
     
      </ul>
   
    </div>
  </div>
</nav>
    
    
    </>
   
    
  }
}
