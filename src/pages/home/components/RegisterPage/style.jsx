
import styled from "@emotion/styled";
import Registerimg from "images/OurPrograms/register-bg.jpg";
import theme from "../../../../design-system/config";

export const RegisterWrapper = styled("section")`

label:RegisterWrapper;
background: url(${Registerimg}) fixed;
background-size: cover;
background-repeat: no-repeat;
height: 450px;
padding: 3rem 0 ;


`
export const RegisterContainer = styled("div")`

label:RegisterContainer;
display: flex;
justify-content: space-between;


`

export const RegisterSpan =styled("span")`

label:Register;
color: ${theme.white};
padding-right: 0.5rem;
font-size:  2rem;
font-weight:  bold;


`

export const Here =styled("span")`

label:Here;
color: ${theme.primary};
font-size:  2rem;
font-weight:  bold;

`
export const DescriptionRegister =styled("p")`

label:DescriptionRegister;
color: ${theme.white};
font-weight: bold;


`
export const DescriptionRegisterTow =styled("p")`

label:DescriptionRegisterTow;
color: ${theme.gray};



`
export const FormWrapper =styled("div")`

label:FormWrapper;
display: flex;
flex-direction: column;
gap:1rem;




`
export const RegisterInput =styled("input")`

label:RegisterInput;
padding: 0.6rem;
border-radius: 5px;
border: 2px solid ${theme.white};
background-color: transparent;
::placeholder {
    font-size: 1rem;
    color: ${theme.white}
}





`

export const RegisterButton =styled("button")`

label:RegisterButton;
cursor: pointer;
font-size: 1rem;
text-transform: uppercase;
padding: 1rem 2.5rem;
border-radius: 5px;
color: ${theme.white};
background:${theme.primary};
transition: all 0.3s;
border: 2px solid ${theme.primary};
width: fit-content;
align-self: flex-end;
:hover {
color: ${theme.secondary};
background: ${theme.white};
border: 2px solid ${theme.white};



}

`