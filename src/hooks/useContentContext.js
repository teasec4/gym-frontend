import { ContentContext } from "../context/ContentContext";
import { useContext } from "react";

export const useContentContext = () => {
    const context = useContext(ContentContext)

    if(!context){
        throw Error('useContentContext must be inside Provider')

    }

    return context
}