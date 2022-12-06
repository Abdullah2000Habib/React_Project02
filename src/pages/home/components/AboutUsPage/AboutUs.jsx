import About from "images/OurPrograms/About-us.jpg";
import React from 'react';
import { AboutUsWrapper, Div, P, Span } from './style';

export default function AboutUs() {
  return (
    <div className='container'>

        <AboutUsWrapper>

            <Div>


                <Span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis amet beatae, corrupti at, nam sint atque nobis quidem illum unde, odio quaerat ipsum accusamus temporibus facere.</Span> 
                <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis amet beatae, corrupti at, nam sint atque nobis quidem illum unde, odio quaerat ipsum accusamus temporibus facere.</P> 
                <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis amet beatae, corrupti at, nam sint atque nobis quidem illum unde, odio quaerat ipsum accusamus temporibus facere.</P> 
                
            </Div> 



            <Div>

                <img width="100%" src={About} alt="About-Us"></img>
                
                
                </Div> 




        </AboutUsWrapper>

    </div>
  )
}
