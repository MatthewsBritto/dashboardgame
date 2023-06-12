import { HeaderContainer,HeaderLink } from "./styles";


export default function Header(){
    return (
        <HeaderContainer>
            <div>
                <HeaderLink active={true}>Link 1</HeaderLink>
                <HeaderLink active={false}>Link 2</HeaderLink>
                <HeaderLink active={false}>Link 3</HeaderLink>
            </div>
        </HeaderContainer>
    )
}