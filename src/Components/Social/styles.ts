import styled from "styled-components";

export const IconsContainer = styled.ul`

    width: 20%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    right: 50px;
    bottom: 25px;

    li{

        display: flex;
        flex-direction: column;

        span{
            color: white;
            padding-top: .4rem;
        }
    }
`