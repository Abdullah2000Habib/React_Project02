import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import theme from "../../../../design-system/config";
export const NavbarWrapper = styled("section")`
    label: NavbarWrapper;
    padding: 1.5rem 0 ;
    color: ${theme.white};
    background-color: ${theme.secondary};

`;
export const NavContainer = styled("div")`
    label: NavContainer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;
export const NavTitle = styled("span")`
    label: NavTitle;
    font-size: 1.7rem;
    
`;
export const Event = styled("span")`
    label: Event;
    color: ${theme.primary};
    
`;

// export const Link = styled("a")`
//     label: Link;
//     font-size: 1rem;
//     color: ${theme.white};
//     text-decoration: none;

//     &:hover {


//         text-decoration: none;
//     }
// `;

export const LinkWrapper = styled("div")`
    label: LinkWrapper;
    display: flex;
    gap: 1rem;
    align-items: center;
    
  
   
    
    
    
`;

export const Links = styled(Link)`
    label: Link;
    font-size: 1rem;
    color: ${theme.white};
    text-decoration: none;

    
    &:hover {


        text-decoration: none;
       color:${theme.active} !important; 
    }
`;