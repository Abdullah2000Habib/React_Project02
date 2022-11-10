import React from 'react';
import { useLocation } from 'react-router-dom';
import theme from '../../../../design-system/config';
import links from './Links';
import NavLinks from './NavLinks';

export default function NavItems() {

    const items = links();
    const route = useLocation();

  return (
    <>
      {items.map((link,index)=>{

     return <NavLinks  color ={route.pathname === link.navLink ? theme.active: theme.white}navLink={link.navLink} navText={link.navText} key={index}></NavLinks>

    })
}


</>

  )
}
