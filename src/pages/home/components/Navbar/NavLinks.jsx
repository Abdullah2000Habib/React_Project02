import React from 'react';
// import { Link } from 'react-router-dom';
 import { Links } from './styles';

export default function NavLinks({navLink,navText,color}) {
  return (
    
    <Links style={{color:color}} to={navLink}>{navText}</Links>

    // <Link style={{color:color}} href={navLink}>{navText}</Link>
  )
}
