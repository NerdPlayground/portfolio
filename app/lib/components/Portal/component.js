import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export default function Portal({ component }){
    const [mounted,setMounted]=useState(false);
    useEffect(()=>setMounted(true),[]);
    
    return mounted && createPortal(
        component,document.getElementById("overlay")
    );
}
