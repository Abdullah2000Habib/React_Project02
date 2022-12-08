import styled from "@emotion/styled";
import Venuebg from "images/OurPrograms/venue-bg.jpg";
import theme from "../../../../design-system/config";

export const VenueWrapper = styled("section")`

label:VenueWrapper;
margin: 5rem 0;
background: url(${Venuebg}) fixed;
background-size: cover;
background-repeat: no-repeat;
height: 450px;
padding: 3rem 0 ;


`

export const VenueSpan =styled("span")`

label:VenueSpan;
color: ${theme.primary};
font-size:  2rem;
font-weight:  bold;

`
export const DescriptionVenue =styled("p")`

label:DescriptionVenue;
color: ${theme.black};
font-weight: bold;


`
export const P =styled("p")`

label:P;
color: ${theme.gray};
width: 50%;
line-height: 1.7;
margin: 2rem 0; 


`