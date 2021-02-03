import React, {  createContext, useState, useContext} from "react";

interface IVoiceContext{
    search_voice: string;
    setSearch: any
};

export const VoiceContext =  createContext<IVoiceContext>( {} as IVoiceContext );

export function VoiceProvider({ children }:any) {
    const [search_voice, setSearch] = useState<any>("");

    return (
        <VoiceContext.Provider value={{search_voice, setSearch}}>
            {children}
        </VoiceContext.Provider>
    );
}

//export const VoiceProvider = VoiceContext.Provider

export default VoiceContext



















