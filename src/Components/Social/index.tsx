import { IconsContainer } from "./styles"
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

export default function SocialIcons(){
    return (
        <IconsContainer>
            <li>
                <p><AiFillGithub size={35} color="white"/></p>
                <span>Github</span>
            </li>
            <li>
                <p><AiFillLinkedin size={35} color="white"/></p>
                <span>Linkedin</span>
            </li>

        </IconsContainer>
    )
}