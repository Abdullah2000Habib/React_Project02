import React from 'react';
import Slider from './Slider';
import { Creative, CreativeSpeakersWrapper, Description, SliderWrapper, Speakers } from './styles';

export default function CreativeSpeakersComponent() {
  return (
    <CreativeSpeakersWrapper>

        <div className='container'>

            <div>

                <Creative>Creative</Creative>
                <Speakers>Speakers</Speakers>
                <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis amet beatae, corrupti at, nam sint atque </Description>


            </div>

            <SliderWrapper>
              <Slider></Slider>
            </SliderWrapper>
            







        </div>




    </CreativeSpeakersWrapper>
  )
}
