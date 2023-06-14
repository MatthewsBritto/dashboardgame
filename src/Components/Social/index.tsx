import { IconsContainer } from "./styles"
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

export default function SocialIcons(){
    return (
        <IconsContainer>
            <li>
                <AiFillGithub size={35}/>
                <span>Github</span>
            </li>
            <li>
                <AiFillLinkedin size={35}/>
                <span>Linkedin</span>
            </li>

        </IconsContainer>
    )
}