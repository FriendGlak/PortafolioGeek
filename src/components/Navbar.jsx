import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../globalStyles';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtnLink,
    NavItemBtn
} from '../style/NavbarStyles';



const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/inicio" onClick={closeMobileMenu}>
                            <NavIcon />
                            GLAK
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/inicio' onClick={closeMobileMenu}>
                                    Presentación
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/proyects' onClick={closeMobileMenu}>
                                    Proyectos
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/testimonios' onClick={closeMobileMenu}>
                                    Testimonios
                                </NavLinks>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to="/curriculum">
                                        <Button primary>Curriculum</Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to="/curriculum">
                                        <Button onClick={closeMobileMenu} fontBig primary>Curriculum</Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}



export default Navbar;