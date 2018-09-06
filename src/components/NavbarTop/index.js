import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

export default class NavbarTop extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand style={{color: '#fff'}}>Tokoflix</NavbarBrand>
          
        </Navbar>
      </div>
    )
  }
}