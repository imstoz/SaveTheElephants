import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import styled from 'styled-components'

export const Nav = styled.nav`
    background: rgba(35, 25, 23, 0.47);
    height: 80px;
    // margin-top: -80px;
    display: flex;
    justify content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }

    @media screen and (max-width: 480px) {
        margin-bottom: 10rem !important;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled.div`
    display: flex;
    justify-self: flex-start;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    color: #fff;
    padding: 20px 4rem;

    @media screen and (max-width: 650px) {
        width: 100%;
        padding: 1rem 2rem;
    }
    `;

// export const NavLinks = styled.div`
//     right: 0;
//     text-decoration: none;
//     color: #999;
//     margin-right: 30px;
//     font-size: 0.9em;
//     text-transform: uppercase;
//     font-weight: 700;
// `

//     export const NavLink = styled(LinkR)`
//     display: block;
//     position: absolute;
//     color: #fff;
//     font-size: 2rem;
//     display: flex;
//     float: right;
//     text-decoration: none;
//     cursor: pointer;
//     @media screen and (max-width: 400px) {
//         position: absolute;
//         top: 10px;
//         left: 25px;
//     }
// `;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 760px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
top: 1.8rem;
right: 3rem;
    display: flex;
    position: absolute;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
    color: #fff;
`

export const NavLinks = styled(LinkR)`
    color: #fff;
    display: flex;
    flex-flow: row;
    align-items: center;
    text-decoration: none;
    padding: 0 2rem;
    height: 1005;
    cursor: pointer;
`;

export const NavDonate = styled.div `
color: #red;
    // display: flex;
    // flex-flow: row;
    align-items: center;
    text-decoration: none;
    padding: 0 2rem;
    height: 1005;
    cursor: pointer;
`


