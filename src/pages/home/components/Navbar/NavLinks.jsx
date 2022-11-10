import React from 'react';
import { Link } from './styles';

export default function NavLinks({navLink,navText}) {
  return (
    <Link href={navLink}>{navText}</Link>
  )
}
