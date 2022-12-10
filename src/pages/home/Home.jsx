import React from 'react';
import AboutUs from './components/AboutUsPage/AboutUs';
import AccordionPage from './components/AccordionPage/AccordionPage';
import ContactUs from './components/ContactUSPage/ContactUs';
import CreativeSpeakersComponent from './components/CreativeSpeakersPage/CreativeSpeakers';
import Footer from './components/FooterPage/Footer';
import Header from './components/HeaderPage/Header';
import Navbar from './components/NavbarPage/Navbar';
import OurPrograms from './components/OurProgramsPage/OurPrograms';
import OurSponsors from './components/OurSponsorsPage/OurSponsors';
import OverView from './components/OverViewPage/OverView';
import Register from './components/RegisterPage/Register';
import Venue from './components/VenuePage/Venue';
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
      < Register/>
      < AccordionPage/>
      < Venue/>
      < OurSponsors/>
      < ContactUs/>
      < Footer/>

    </>
  )
}
