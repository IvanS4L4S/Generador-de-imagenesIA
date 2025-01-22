"use client";
import React, { useState } from 'react'
import Nav from './Nav';
import NavMovile from './NavMovile';

const NavResponsivo = () => {
  const [showNav,setShotNav]=useState(false);
  const  openNavHandler=() => setShotNav(true);
  const  closeNavHandler=() => setShotNav(false);
  return (
    <div>
        <Nav openNav={openNavHandler}/>
        <NavMovile showNav={showNav} closeNav={closeNavHandler}/>
    </div>
  );
}

export default NavResponsivo