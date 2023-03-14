import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    background: red;
    z-index: 100;
    width: 100%;
    position: fixed;
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

const MenuBars = styled.i``;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

`;

const Navbar = () => {
    return (
        <Nav>
            <Logo to="/" >ELIXR</Logo>
            <MenuBars />
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
