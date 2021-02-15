import React, {  createContext, useState, useContext} from "react";

interface IVoiceContext{
    search_voice: string;
    setSearch: any,
    isVisibleDetails: boolean,
    setisVisibleDetails: any,
    isVisibleDriver: boolean,
    setisVisibleDriver:  any,
    isVisibleVoice: boolean,
    setisVisibleVoice: any
};

export const VoiceContext =  createContext<IVoiceContext>( {} as IVoiceContext );

export function VoiceProvider({ children }:any) {
    const [search_voice, setSearch] = useState<any>("");
    const [isVisibleVoice, setisVisibleVoice] = useState(false)
    const [isVisibleDetails, setisVisibleDetails] = useState<boolean>(false);
    const [isVisibleDriver, setisVisibleDriver] = useState(false);

    return (
        <VoiceContext.Provider value={{search_voice, setSearch, isVisibleDetails, setisVisibleDetails,isVisibleDriver, setisVisibleDriver,isVisibleVoice, setisVisibleVoice}}>
            {children}
        </VoiceContext.Provider>
    );
}

//export const VoiceProvider = VoiceContext.Provider

export default VoiceContext



















