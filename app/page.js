"use client";
import { Content } from "@/app/content/main-content";
import { Navbar, Navpane } from "@/app/navigation/navbar";

export default function Root(){
    /**
     * closes nav pane if user clicks outside it
    */
    function closeNavPane(event){
        const path=event.composedPath();
        if(path.some(element=>
            element.id==="nav-pane" ||
            (element.classList && element.classList.contains("toggle-nav-pane"))
        )) return;
        toggleNavPane();
    }

    /**
     * toggles navigation pane
     * 0px when visible
     * -250px when hidden
     */
    function toggleNavPane(event){
        let navPane=document.getElementById("nav-pane");
        if(navPane.style.right==="" || navPane.style.right==="-250px"){
            navPane.style.right="0px";
            document.addEventListener("click",closeNavPane);
        }
        else if(navPane.style.right==="0px"){
            document.removeEventListener("click",closeNavPane);
            navPane.style.right="-250px";
        }
    }

    return(
        <>
            <Navpane toggleNavPane={toggleNavPane}/>
            <Navbar toggleNavPane={toggleNavPane}/>
            <Content/>
        </>
    );
}