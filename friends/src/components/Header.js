import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import styled from "styled-components"

const StyledHeader = styled.nav `
    padding: 2rem;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;

    .navClass{
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`

function Header() {
    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = '/';
    }
    return (
        <StyledHeader>
            <div className = "navClass">
                <Link to = "/">HOME</Link>
                <Link to = "/login">LOGIN</Link>
                <Link onClick = {logout} >LOG OUT</Link>
                <Link to = "/protected">FRIENDS</Link>
            </div>
        </StyledHeader>
    )
}

export default Header
