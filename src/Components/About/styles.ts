import styled from "styled-components";
import { SectionProps } from "../Header";


export const AboutContainer = styled.main<SectionProps>`

    width: 100%;
    background-color: #0f0f0f;
    height: calc(100vh - 10rem);
    position: absolute;
    z-index: ${props => props.active ==='Skills' ? 5 : -1} ;
`