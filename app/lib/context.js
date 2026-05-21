"use client";
import { createContext, useCallback, useState } from "react";

export const Carousel=createContext(null);
export const Reference=createContext(null);

export function ReferenceProvider({ children,initial={} }){
    const [refs,updateRefs]=useState(initial);

    const addRef=useCallback(ref=>{
        updateRefs(prev=>({...prev,...ref}));
    },[]);

    return(
        <Reference value={{refs,addRef}}>{
            children
        }</Reference>
    )
}
