import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
     <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">ANI CART</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/clothes">Clothes</NavLink>
       </li>
       <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/electronic">ELECTRONIC</NavLink>
       </li>

       <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/smartphones">SMARTPHONES</NavLink>
       </li>

       
       <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/Login">Login</NavLink>
       </li>



        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Food
          </a>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/">VEGETABLES</NavLink></li>
            <li><NavLink className="dropdown-item" to="/">FRUITS</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item" to="/">JUNK FOOD</NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
          
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> 
    
  )
}
