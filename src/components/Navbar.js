import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import Bars from '../images/bars.svg';

const Nav = styled.nav`
    // height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    width: 100%;
    position: fixed;
    align-items: center;
    `;

const NavLink = css`
    color: #fff;
    display: flex;
    align-item: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    `;

const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
    font-weight: bold;
    `;

const MenuBars = styled.i`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        background-image: url(${Bars});
        background-size: contain;
        -webkit-transform: scaleX(-1);
        transform: translate(-230%, 10%) scaleX(-1);
        height: 40px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
    }
    `;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;
    vertical-align: middle;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const Navbar = ({ toggle }) => {
    return (
        <Nav>
            <Logo to="/" >SunShine Home</Logo>
            <MenuBars onClick={toggle} />
            <NavMenu >
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to='/contact' primary='true'>Contact Us</Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar;
