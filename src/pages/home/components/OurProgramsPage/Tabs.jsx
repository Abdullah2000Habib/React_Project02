import React, { useState } from 'react';

import { tab1, tab2, tab3 } from '../../../../design-system/components/OurPrograms/Data';
import OurPrograms from '../../../../design-system/components/OurPrograms/OurPrograms';
import theme from '../../../../design-system/config';
import { Line, Span, Wrapper } from './style';

export default function Tabs () {


  const [tab,setTabs] =useState("tab1");

  const switchTab = (tab)=>{

       setTabs(tab)
  };


  return (
    <>

    <Wrapper>

    <Span  style={{color:tab==="tab1" ?theme.primary:"",borderBottom:tab==="tab1" ?`4px solid ${theme.primary} `:""}} onClick={()=>switchTab("tab1")}>First Day</Span>
    <Span  style={{color:tab==="tab2" ?theme.primary:"",borderBottom:tab==="tab2" ?`4px solid ${theme.primary} `:""}}onClick={()=>switchTab("tab2")}>Second Day</Span>
    <Span  style={{color:tab==="tab3" ?theme.primary:"",borderBottom:tab==="tab3" ?`4px solid ${theme.primary} `:""}} onClick={()=>switchTab("tab3")}>Third Day</Span>


    </Wrapper>

    <Line/>

      {
    tab === "tab2"?
     tab2.map( (item)=>{

      return (<OurPrograms  name={item.name} img={item.img} alt={item.alt} description={item.description} roomNumber={item.roomNumber} time={item.time} title={item.title} key={item.id}/>)
    })
    :tab === "tab3"?
    tab3.map( (item)=>{

    return (<OurPrograms  name={item.name} img={item.img} alt={item.alt} description={item.description} roomNumber={item.roomNumber} time={item.time} title={item.title} key={item.id}/>)
     }):
      tab1.map( (item)=>{

      return (<OurPrograms  name={item.name} img={item.img} alt={item.alt} description={item.description} roomNumber={item.roomNumber} time={item.time} title={item.title} key={item.id}/>)
     })
    
  }






    </>
  )
}
