import styled from "styled-components";

export const IconsContainer = styled.ul`

    width: 15%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 2rem auto;
    /* position: absolute;
    right: 60px;
    bottom: 100px; */

    li {
        display: flex;
        flex-direction: column;
        transition: all .3s ease-in;
        cursor: pointer;

        span {
            color: white;
            padding-top: .4rem;
        }

        &:hover{
            transform: scale(1.2);
 
        }
    }
`