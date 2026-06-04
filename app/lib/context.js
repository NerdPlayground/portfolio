"use client";
import { createContext, useCallback, useEffect, useState } from "react";

export const Carousel=createContext(null);
export const Reference=createContext(null);

export function ReferenceProvider({ children,initial={} }){
    const [refs,updateRefs]=useState({...initial,edit:false});

    const addRef=useCallback(ref=>{
        updateRefs(prev=>({...prev,...ref}));
    },[]);

    useEffect(()=>{
        let edit_value=localStorage.getItem("edit");
        addRef({edit:edit_value==="false"||edit_value===null?false:true})}
    ,[addRef]);

    return(
        <Reference value={{refs,addRef}}>{
            children
        }</Reference>
    )
}
