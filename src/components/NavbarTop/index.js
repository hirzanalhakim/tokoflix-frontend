import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import profile from './../../assets/defaultUser.png';
import { FaMoneyBillWave } from 'react-icons/fa';

export default class NavbarTop extends Component {
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand style={{ color: '#fff' }}>Tokoflix</NavbarBrand>
          <Nav navbar className="ml-auto">
            <NavItem>
              <div>
                <img src={profile} alt="profile" style={{ borderRadius: '50%', width: '35px', backgroundColor: 'white' }} />
                <span style={{ marginLeft: '5px', color: '#fff' }}>Hirzan Al Hakim</span>
              </div>
            </NavItem>
          </Nav>
        </Navbar>
        <div style={{backgroundColor: '#F4F4F4', height: '25px' }}>
          <div style={{ position: 'absolute', right: '18px', color: '#47B34F'}}> <FaMoneyBillWave /> Rp. 100.000 </div>
        </div>
      </div>
    )
  }
}