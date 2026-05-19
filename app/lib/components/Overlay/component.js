"use client";
import styles from "./styles.module.scss";
import { Reference } from "@lib/context";
import { useContext, useEffect, useRef } from "react";
import Login from "../auth/login";

export default function Overlay(){
    const overlay=useRef(null),portal=useRef(null);
    const { addRef, refs }=useContext(Reference);
    useEffect(()=>addRef({portal:portal.current.style}),[addRef]);

    return(
        <div id="overlay" className={styles.overlay} ref={portal}>
            <Login/>
        </div>
    )
}
