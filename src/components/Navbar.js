import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import{NavLink}from 'react-router-dom';

export default function Navbar (){
    return (<div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
              <NavLink to="/home" className="nav-link">Home</NavLink>
              </li>
              <li class="nav-item">
              <NavLink to="/menu" className="nav-link">Menu</NavLink>
              </li>
              <li class="nav-item">
              <NavLink to="/about" className="nav-link">About</NavLink>
              </li>
              <li class="nav-item">
              <NavLink to="/cart" className="nav-link">Cart</NavLink>
              </li>
              <li class="nav-item">
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
        
    )
}