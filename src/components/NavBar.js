import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <nav className="indigo darken-3">
        <div className="container">
          <ul className="right">
          <li><NavLink to="/" className="brand-logo">Home</NavLink></li>
            <li><NavLink to="/plants/new">Create Cannabis Plants</NavLink></li>
            <li><NavLink to="/plants">Cannabis Plants List</NavLink></li>
            <li><NavLink to="/rooms">Grow Rooms List</NavLink></li>    
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar