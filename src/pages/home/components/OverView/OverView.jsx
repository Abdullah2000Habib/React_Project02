import React from 'react';
import overviewData from '../../../../design-system/components/Overview/Data';
import OverViewComponent from '../../../../design-system/components/Overview/Overview';
import { OverViewContainer, OverViewWrapper } from './style';

export default function OverView() {
  return (

    <OverViewWrapper>


    <div className='container'>


        <OverViewContainer>


        {

            overviewData.map((item)=>{

                return (<OverViewComponent key={item.id} icon={item.icon} title={item.title} description={item.Description}/>)
            })
        }


       </OverViewContainer>









    </div>




    </OverViewWrapper>





  
  )
}
