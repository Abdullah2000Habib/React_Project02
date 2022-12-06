import React from 'react';
import { Div, P, Span, SubTitle, WatchVideoWrapper } from './style';

export default function WatchVideo() {
  return (
   <div className='container'>

        <WatchVideoWrapper>

            <Div>


                <Span>Watch Video</Span> 
                <SubTitle>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis amet beatae, corrupti at, nam sint atque nobis quidem illum unde, odio quaerat ipsum accusamus temporibus facere.</SubTitle> 
                <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis amet beatae, corrupti at, nam sint atque nobis quidem illum unde, odio quaerat ipsum accusamus temporibus facere.</P> 
                
            </Div> 



            <Div>

                 <iframe frameBorder="0" width="100%" height="350px" src='https://www.youtube.com/embed/eI4an8aSsgw'></iframe>
                
                
                </Div> 




        </WatchVideoWrapper>

    </div>
  )
}
