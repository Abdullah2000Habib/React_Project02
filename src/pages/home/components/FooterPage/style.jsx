import styled from "@emotion/styled";
import theme from "../../../../design-system/config";



export const FooterWrapper =styled("footer")`


label:FooterWrapper;
text-align: center;
padding: 2rem 0;


`

export const FooterWord =styled("span")`

label:FooterWord;
color: ${theme.primary};

font-weight:  bold;

`
export const DescriptionFooter=styled("span")`

label:DescriptionFooter;
color: ${theme.gray};
margin: 1rem 0  2rem 0;


`
export const Ul=styled("ul")`

label:Ul;
list-style: none;
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
padding-top: 1rem;



`
export const Li=styled("li")`

label:Li;
display: flex;
transition: 0.3s;
align-items: center;
justify-content: center;
width:20px; 
height: 20px;
border-radius: 50%;
padding: 1rem;
color: ${theme.gray};
cursor: pointer;
:hover {
    background-color: ${theme.primary};
    color: ${theme.white};
}





`