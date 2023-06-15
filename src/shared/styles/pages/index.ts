import styled from "styled-components";

export const Container = styled.div`

    height: calc(100vh - 10rem);
    text-align: center;
    background-color:${props => props.theme.purple} ;
    overflow: hidden;

    h1{
        color: ${props => props.theme.titleColor}
    }

`

