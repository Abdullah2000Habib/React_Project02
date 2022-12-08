import React from 'react';
import ourSponsorData from '../../../../design-system/components/OurSponsorsComponent/Data';
import { OurSponsorsComponent } from '../../../../design-system/components/OurSponsorsComponent/OurSponsors';
import { DescriptionSponsors, SponsorsContainer, SponsorsFirstWord, SponsorsSecondWord, SponsorsWrapper } from './style';

export default function OurSponsors() {
  return (
    <div className='container'>

        <SponsorsWrapper>
          
            <SponsorsFirstWord>Our </SponsorsFirstWord>
            <SponsorsSecondWord>Sponsors</SponsorsSecondWord>

            <DescriptionSponsors>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            Lorem ipsum dolor</DescriptionSponsors>

        </SponsorsWrapper>


        <SponsorsContainer>

            {
                ourSponsorData.map((Sponsors)=>{
                    return (<OurSponsorsComponent src={Sponsors.img} alt={Sponsors.id} key={Sponsors.id} ></OurSponsorsComponent>)
                })
            }


        </SponsorsContainer>





    </div>
  )
}
