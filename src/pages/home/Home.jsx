import React from 'react';
import AboutUs from './components/AboutUsPage/AboutUs';
import CreativeSpeakersComponent from './components/CreativeSpeakersPage/CreativeSpeakers';
import Header from './components/HeaderPage/Header';
import Navbar from './components/NavbarPage/Navbar';
import OurPrograms from './components/OurProgramsPage/OurPrograms';
import OverView from './components/OverViewPage/OverView';
import WatchVideo from './components/WatchVideoPage/WatchVideo';

export default function Home() {
  return (
    <>
    
      <Navbar />
      <Header/>
      <AboutUs></AboutUs>
      <OverView></OverView>
      <WatchVideo/>
      <CreativeSpeakersComponent/>
      <OurPrograms/>

    </>
  )
}
