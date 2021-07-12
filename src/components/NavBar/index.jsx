import React from 'react';
import { Nav, Logo, LogoText, UlList, LiItem, Anchor } from "./style"

//import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <Nav>
            <div className="container">
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                <UlList>
                    <LiItem>
                        <Anchor href="/home">Home</Anchor>
                    </LiItem>
                    <LiItem>
                        <Anchor href="#">Work</Anchor>
                    </LiItem>
                    <LiItem>
                        <Anchor href="#">Portfolio</Anchor>
                    </LiItem>
                    <LiItem>
                        <Anchor href="#">About</Anchor>
                    </LiItem>
                    <LiItem>
                        <Anchor href="#">Resuem</Anchor>
                    </LiItem>
                    <LiItem>
                        <Anchor href="/contact">Contact</Anchor>
                    </LiItem>
                </UlList>
            </div>
        </Nav>
    );
}

export default NavBar;