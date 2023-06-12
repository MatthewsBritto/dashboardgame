import styled from "styled-components";

interface HeaderLinkProps {
    active: boolean
}

export const HeaderContainer = styled.ul`

    width: 100vw;
    height: 10rem;
    

    div{
        margin: auto;
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;    
    }
`

export const HeaderLink = styled.a<HeaderLinkProps>`
    
    color: white;
    font-size: 1.4rem;
    border-bottom: ${props => props.active ? '2px solid white' : 'none'};
    padding-bottom: .2rem;

`