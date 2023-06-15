import About from "@/Components/About";
import Header from "@/Components/Header";
import Homepage from "@/Components/Home";
import ActiveContext from "@/Context/context";
import { Container } from "@/shared/styles/pages";
import { useContext } from "react";


export default function Home(){

    const activeInfo = useContext(ActiveContext)


    return (
        <ActiveContext.Provider value={activeInfo.active}>
                    <Container>
                <Header/>
                <Homepage/>
                <About/>
            </Container>
        </ActiveContext.Provider>
    )
}