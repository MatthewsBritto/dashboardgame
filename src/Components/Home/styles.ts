import styled from "styled-components";
import { SectionProps } from "../Header";


export const HomePageContainer = styled.main<SectionProps>`

    width: 100%;
    padding-top: 2rem;
    height: calc(100vh - 10rem);
    /* display: none; */
    position: absolute;
    background-color: ${props => props.theme.purple};
    z-index: ${props => props.active ==='Home' ? 5 : -1} ;


`

export const CenterInfos = styled.div`

    position: relative;


    p{
        font-size: 1.2rem;
        color: white;
        margin-top: 1rem;
        font-family: 'Press Start 2P';
    }
`

export const Name = styled.h1`

        z-index: 2;
        position: relative;
        font-size: 3rem;
        letter-spacing:15px;
        text-transform: uppercase;
        font-family:'Rubik Mono One';
        color: white;
        
`