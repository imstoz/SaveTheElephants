import React from 'react'
import { FaBars } from 'react-icons/fa'
// import { Link as LinkR } from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
import { Nav, NavbarContainer, NavLogo, NavLinks, NavItem, MobileIcon, NavMenu, NavDonate } from './NavbarElements'
import Img from '../../images/logo.png';
import '../../App.css';



const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                    <img src={Img} className='logo' alt="logo" /> 
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                        <NavLinks to='/'>Get Involved</NavLinks>
                        </NavItem>
                        <NavDonate>
                        <a rel={'external'} 
    target="_blank" href={"https://www.savetheelephants.org/get-involved/donate/"} > 
                        Donate</a>
                        </NavDonate>
                    </NavMenu>
                    {/* <NavLinks>
                    <LinkR>Get Involved</LinkR>
                    <LinkR>Donate</LinkR>
                    </NavLinks> */}
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
