
import styled from "@emotion/styled";
import Contactimg from "images/OurPrograms/contact-bg.jpg";
import theme from "../../../../design-system/config";

export const ContactUSWrapper = styled("section")`

label:ContactUSWrapper;
background: url(${Contactimg}) fixed;
background-size: cover;
background-repeat: no-repeat;
height: 500px;
padding: 3rem 0 ;
margin: 5rem 0 ;


`
export const ContactUSContainer = styled("div")`

label:ContactUSContainer;
display: flex;
justify-content: space-between;
align-items: center;


`

export const NewSpan =styled("span")`

label:NewSpan;
color: ${theme.black};
padding-right: 0.5rem;
font-size:  2rem;



`

export const EventSpan =styled("span")`

label:EventSpan;
color: ${theme.primary};
font-size:  2rem;


`

export const DescriptionContactUS=styled("p")`

label:DescriptionContactUS;
color: ${theme.gray};



`
export const FormContactUSWrapper =styled("div")`

label:FormContactUSWrapper;
display: flex;
flex-direction: column;
gap:1rem;
background-color: ${theme.white};
border-radius: 30px;
padding: 3rem 1.5rem;

`
export const ContactUSInput =styled("input")`

label:ContactUSInput;
padding: 0.3rem;
border: none;
border-bottom: 1px solid ${theme.gray};
background-color: transparent;
color: ${theme.black};
outline: none;
::placeholder {
    font-size: 1rem;
    color: ${theme.gray};
}`


export const TextAria =styled("textarea")`

label:TextAria;
padding: 0.3rem;
border: none;
max-height: 100px;
border-bottom: 1px solid ${theme.gray};
background-color: transparent;
color: ${theme.black};
resize:vertical;
height: 100px;
outline: none;
::placeholder {
    font-size: 1rem;
    color: ${theme.gray};
}





`

export const DownloadButton =styled("button")`

label:DownloadButton;
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
:hover {
color: ${theme.white};
background: ${theme.black};
border: 2px solid ${theme.black};



}

`
export const SendButton =styled(DownloadButton)`

label:SendButton;
background:${theme.black};
border: 2px solid ${theme.black};
border-radius: 25px;
text-transform: capitalize;
padding: 0.4rem 1rem;
:hover {
color: ${theme.white};
background: ${theme.primary};
border: 2px solid ${theme.primary};



}

`