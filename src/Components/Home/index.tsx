import Header from "../Header";
import Image from "next/image";
import prog from '../../../public/programming.svg'
import { HomePageContainer } from "./styles";


export default function Homepage(){

    return(
        <HomePageContainer>
            <h1>
                Matthews Britto      
            </h1>
            <Image src={prog} width={700} height={350} alt=""/>
            <p>Font - End Developer</p>
        </HomePageContainer>
    )
}