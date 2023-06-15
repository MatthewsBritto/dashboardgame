import { createContext } from "react";

type ActiveProps = {
    active: string;
}

const ActiveContext = createContext<ActiveProps>()

export default ActiveContext