import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <nav className="indigo darken-3">
        <div className="container">
          <NavLink to="/" className="brand-logo">DreamFarmer</NavLink>
          <ul className="right">
            <li><NavLink to="/cannabisPlants/new">Create Cannabis Plants</NavLink></li>
            <li><NavLink to="/cannabisPlants">Cannabis Plants List</NavLink></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar