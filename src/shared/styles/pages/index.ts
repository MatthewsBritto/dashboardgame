import styled from "styled-components";

export const Container = styled.div`

    height: 100vh ;
    text-align: center;
    background-color:${props => props.theme.purple} ;
    overflow: hidden;

    h1{
        color: ${props => props.theme.titleColor}
    }

`

