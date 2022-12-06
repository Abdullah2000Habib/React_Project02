import styled from "@emotion/styled";
import Header from "images/OurPrograms/intro-bg.jpg";
import theme from "../../../../design-system/config";



export const HeaderWrapper =styled("section")`
label:HeaderWrapper;
height: 800px;
background: url(${Header}) fixed;
background-size: cover;
background-repeat: no-repeat;
padding: 20% 0 ;
text-align: center;


`
export const H3 =styled("h3")`
label:H3;
color:${theme.white};
font-size: 1.5rem;
letter-spacing:0.3rem;
margin-bottom: 3.5rem;


`

export const Title =styled("h1")`
label:Title;
color:${theme.white};
font-size: 3.5rem;
color: ${theme.white};


`
export const LearnMore =styled("button")`
label:LearnMore;
padding: 1rem 2.5rem;
border-radius: 5px;
text-transform: uppercase;
cursor: pointer;
color: ${theme.white};
background:transparent;
transition: all 0.3s;
border: 2px solid ${theme.white};
margin-right: 3rem;
margin-top: 1.5rem;
:hover {
color: ${theme.white};
background: ${theme.primary};
border: 2px solid ${theme.primary};

}


`
export const Register =styled("button")`

label:Register;
cursor: pointer;
font-size: 1rem;
text-transform: uppercase;
padding: 1rem 2.5rem;
border-radius: 5px;
color: ${theme.white};
background:${theme.primary};
transition: all 0.3s;
border: 2px solid ${theme.primary};
:hover {
color: ${theme.secondary};
background: ${theme.white};
border: 2px solid ${theme.white};
}


`