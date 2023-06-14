import { HeaderContainer,HeaderLink } from "./styles";


export default function Header(){



    return (
        <HeaderContainer>
            <div>
                <HeaderLink active={false}>Home</HeaderLink>
                <HeaderLink active={false}>Skills</HeaderLink>
                <HeaderLink active={false}>Portfólio</HeaderLink>
            </div>
        </HeaderContainer>
    )
}