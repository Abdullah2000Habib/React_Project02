import React from 'react';
import Accordion from './Accordion/Accordion';
import { DescriptionAccordion, FirstWord, SecondWord, Wrapper } from './style';

export default function AccordionPage() {
  return (
    <div className='container'>

        <Wrapper>
          
            <FirstWord>Do You Have </FirstWord>
            <SecondWord>Questions</SecondWord>
            <FirstWord>? </FirstWord>
            <DescriptionAccordion>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            Lorem ipsum dolor</DescriptionAccordion>

        </Wrapper>

        <Accordion/>



    </div>
  )
}
