"use client";
import { blackOpsOne, courierPrime } from "@/app/ui/fonts";
import { useContext, useRef, useEffect } from "react";
import { Reference } from "@lib/context";
import Image from "next/image";
import { blurBackground } from "@lib/functions";
import { logoutAccount } from "../lib/actions";

function AuthButton({ navBar,toggleNavPane }){
    const size=22;
    const { refs }=useContext(Reference);
    const class_list=`button nav-link ${courierPrime.className}`;

    function openLoginPrompt(){
        refs.portal.visibility="visible";
        refs.login_prompt.visibility="visible";
        blurBackground(refs);
        if(!navBar) toggleNavPane();
    }

    async function openLogoutPrompt(){
        await logoutAccount();
        window.location.reload();
    }

    return(navBar?
        <button className={class_list} onClick={refs?.token?openLogoutPrompt:openLoginPrompt}>
            <Image 
                width={size} height={size}
                src={`/${refs?.token?'logout':'login'}.png`} 
                alt={`${refs?.token?'Logout':'Login'} Account`} 
            />
        </button>:
        <a className={class_list} onClick={refs?.token?openLogoutPrompt:openLoginPrompt}>{
            refs?.token?"Logout":"Login"
        }</a>
    );
}

function NavLinks({ navBar,toggleNavPane=null }){
    const navlinks=Object.freeze([
        "Welcome","Projects",
        "Experience","Contact"
    ]);

    return(
        <>
            {navlinks.map((navlink,index)=>{
                return(
                    navBar && navlink==="Welcome"? "":
                    <a
                        key={index}
                        href={`#${navlink.toLowerCase()}`}
                        className={`button nav-link ${courierPrime.className}`}
                    >{navlink}</a>
                )
            })}
            <AuthButton navBar={navBar} toggleNavPane={toggleNavPane}/>
        </>
    );
}

export function Navpane({ toggleNavPane }){
    const navpane=useRef(null);
    const { addRef }=useContext(Reference);
    useEffect(()=>addRef({navpane:navpane.current.style}),[addRef]);

    return (
        <nav id="nav-pane" ref={navpane}>
            <svg className="button toggle-nav-pane" fill="#333333" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={toggleNavPane}>
                <path fillRule="evenodd" d="M19.505 4.975a.6.6 0 0 1 0 .85l-13.2 13.2a.6.6 0 0 1-.85-.85l13.2-13.2a.598.598 0 0 1 .85 0Z" clipRule="evenodd"></path>
                <path fillRule="evenodd" d="M5.456 4.975a.6.6 0 0 0 0 .85l13.2 13.2a.6.6 0 1 0 .85-.85l-13.2-13.2a.6.6 0 0 0-.85 0Z" clipRule="evenodd"></path>
            </svg>
            <div id="nav-links">
                <NavLinks navBar={false} toggleNavPane={toggleNavPane}/>
            </div>
        </nav>
    );
}

export function Navbar({ toggleNavPane }){
    const navbar=useRef();
    const { addRef }=useContext(Reference);
    useEffect(()=>addRef({navbar:navbar.current.style}),[addRef]);

    return (
        <nav id="navbar" ref={navbar}>
            <a
                id="logo" href="#welcome"
                className={`${blackOpsOne.className}`}
            >GM</a>
            <div id="links">
                <NavLinks navBar={true}/>
                <svg className="button toggle-nav-pane" fill="#333333" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={toggleNavPane}>
                    <path fillRule="evenodd" d="M4.92 17.28a.6.6 0 0 1 .6-.6h12a.599.599 0 1 1 0 1.2h-12a.6.6 0 0 1-.6-.6Zm0-4.8a.6.6 0 0 1 .6-.6h12a.599.599 0 1 1 0 1.2h-12a.6.6 0 0 1-.6-.6Zm0-4.8a.6.6 0 0 1 .6-.6h12a.6.6 0 1 1 0 1.2h-12a.6.6 0 0 1-.6-.6Z" clipRule="evenodd"></path>
                </svg>
            </div>
        </nav>
    );
}

export default function Navigation(){
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
        </>
    );
}