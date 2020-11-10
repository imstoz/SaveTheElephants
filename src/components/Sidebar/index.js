import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarDonate} from './SidebarElements'

const Sidebar = ( {isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/">Get Involved</SidebarLink>
                    <SidebarDonate><a rel={'external'} 
    target="_blank" href={"https://www.savetheelephants.org/get-involved/donate/"}>Donate</a></SidebarDonate>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
