import { HeaderContainer,HeaderLink } from "./styles";


export interface SectionProps {
    active: 'Home' | 'Skills' | 'Portfólio'
}

export default function Header() {

    var links = ['Home','Skills','Portfólio']

    function teste(item:string){
        return console.log(item)
    }


    return (
        <HeaderContainer>
            <div>
                {links && links.map((item) => {
                    return(
                        <HeaderLink key={item} onClick={ () =>  teste(item) } active>{item}</HeaderLink>
                    )
                })}
            </div>
        </HeaderContainer>
    )
}