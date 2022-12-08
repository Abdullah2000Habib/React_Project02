import React from 'react';
import { ContactUSContainer, ContactUSInput, ContactUSWrapper, DescriptionContactUS, DownloadButton, EventSpan, FormContactUSWrapper, NewSpan, SendButton, TextAria } from './style';

export default function ContactUs() {
  return (

    <>

    <ContactUSWrapper>

    <div className='container'>

      <ContactUSContainer>


      <div style={{width:"60%"}}>

        <NewSpan>New</NewSpan>
        <EventSpan>Event</EventSpan>



            <DescriptionContactUS> ipsum dolor sit amet consectetur adipisicing elit. Doloribu ipsum dolor sit amet consectetur adipisicing elit. Doloribu ipsum dolor sit amet consectetur adipisicing elit. Doloribu</DescriptionContactUS>
            <DescriptionContactUS> ipsum dolor sit amet consectetur adipisicing elit. Doloribu ipsum dolor sit amet consectetur adipisicing elit. Doloribu ipsum dolor sit amet consectetur adipisicing elit. Doloribu</DescriptionContactUS>
            <DescriptionContactUS> ipsum dolor sit amet consectetur adipisicing elit. Doloribu ipsum dolor sit amet consectetur adipisicing elit. Doloribu ipsum dolor sit amet consectetur adipisicing elit. Doloribu</DescriptionContactUS>
            <DownloadButton >Download Now</DownloadButton>
      </div>

      <FormContactUSWrapper  style={{width:"35%"}}>
        <div>
            <NewSpan>Keep In </NewSpan>
            <EventSpan>Touch</EventSpan></div>



        <ContactUSInput type="text" placeholder='Name'/>
        <ContactUSInput type="email" placeholder=' Email'/>
        <TextAria  placeholder=' Message'></TextAria>
        <SendButton>Send</SendButton>
        


      </FormContactUSWrapper>

      </ContactUSContainer>
    </div>

      
    </ContactUSWrapper>
    
    </>
    
  )
}
