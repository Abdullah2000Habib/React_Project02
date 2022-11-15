import React from 'react';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header/>
      <AboutUs></AboutUs>
    </>
  )
}
