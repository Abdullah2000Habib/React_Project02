import React from "react";
import NavItems from "./NavItems";
import { Event, LinkWrapper, NavbarWrapper, NavContainer, NavTitle } from "./styles";

export default function Navbar() {
    return (
        <NavbarWrapper>
            <div className="container" >
                <NavContainer>
                    <div>
                        <NavTitle>New <Event>Event</Event></NavTitle>
                    </div>

                    <LinkWrapper>

                       <NavItems/>




                    </LinkWrapper>
                    
                </NavContainer>
            </div>
        </NavbarWrapper>
    );
}