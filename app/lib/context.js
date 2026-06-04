"use client";
import { createContext, useCallback, useEffect, useState } from "react";

export const Carousel=createContext(null);
export const Reference=createContext(null);

export function ReferenceProvider({ children,initial={} }){
    // const [edit,setEdit]=useState(false);
    const [refs,updateRefs]=useState({...initial,edit:false});

    const addRef=useCallback(ref=>{
        updateRefs(prev=>({...prev,...ref}));
    },[]);

    // useEffect(()=>console.log(edit),[edit]);

    return(
        <Reference value={{refs,addRef}}>{
            children
        }</Reference>
    )
}
