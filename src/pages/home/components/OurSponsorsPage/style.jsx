import styled from "@emotion/styled";
import theme from "../../../../design-system/config";



export const SponsorsWrapper =styled("section")`

label:SponsorsWrapper;
text-align: center;



`
export const SponsorsFirstWord =styled("span")`

label:SponsorsFirstWord;
color: ${theme.black};
padding-right: 0.3rem;
font-size:  2rem;
font-weight:  bold;


`

export const SponsorsSecondWord =styled("span")`

label:SponsorsSecondWord;
color: ${theme.primary};
font-size:  2rem;
font-weight:  bold;

`
export const DescriptionSponsors =styled("p")`

label:DescriptionSponsors;
color: ${theme.gray};
margin: 1rem 0  2rem 0;


`
export const SponsorsContainer =styled("div")`

label:SponsorsContainer;
display: flex;
align-items: center;
gap:1rem;

`