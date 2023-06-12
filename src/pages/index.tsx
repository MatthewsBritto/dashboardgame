import Header from "@/Components/Header";
import Homepage from "@/Components/Home";
import { Container } from "@/shared/styles/pages";


export default function Home(){
    return (
        <Container>
            <Header/>
            <Homepage/>
        </Container>
    )
}