import React from 'react'
import styled from 'styled-components'

const Header = ({ children }) => (
    <header>
        <h1>Hola soy el header</h1>
        {children}
    </header>
)

export default Header;