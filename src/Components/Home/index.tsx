import Header from "../Header";
import Image from "next/image";
import prog from '../../../public/programming.svg'
import { CenterInfos, HomePageContainer } from "./styles";
import SocialIcons from "../Social";


export default function Homepage(){

    return(
        <HomePageContainer>
            <h1>
                Matthews Britto      
            </h1>

            <CenterInfos>
                <Image src={prog} width={700} height={350} alt=""/>
                <p>Front End Developer</p>
            </CenterInfos>

            <SocialIcons/>
        </HomePageContainer>
    )
}