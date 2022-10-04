import { createContext, useReducer } from "react";

export const ContentContext = createContext()

export const contentReducer = (state, action) => {
    switch(action.type){
        case "FETCH_REQUEST":
            return {...state, loading:true}
        case "FETCH_SUCCESS":
            return {...state, loading:false, info:action.payload}
        case "FETCH_FAIL":
            return {...state, loading: false, error:action.payload}
        default:
            return state
    }
}

export const ContentContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(contentReducer,{
        info:[], loading:true, error:''
    })

    
    return(
        <ContentContext.Provider value={{...state, dispatch}}>
            {children}
        </ContentContext.Provider>
    )
}

