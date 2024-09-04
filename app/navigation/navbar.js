"use client";
import { blackOpsOne, courierPrime } from "@/app/ui/fonts";

function NavLinks({ togglePage }){
    const navlinks=Object.freeze([
        "Home","Projects",
        "Experience","Contact"
    ]);

    return navlinks.map(navlink=>{
        return(
            togglePage!==null && navlink==="Home"? "":
            <a
                key={navlink}
                onClick={togglePage}
                href={`#${navlink.toLowerCase()}`}
                className={`button nav-link ${courierPrime.className}`}
            >{navlink}</a>
        )
    });
}

export function Navpane({ toggleNavPane }){
    return (
        <nav id="nav-pane">
            <svg className="button toggle-nav-pane" fill="#333333" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={toggleNavPane}>
                <path fillRule="evenodd" d="M19.505 4.975a.6.6 0 0 1 0 .85l-13.2 13.2a.6.6 0 0 1-.85-.85l13.2-13.2a.598.598 0 0 1 .85 0Z" clipRule="evenodd"></path>
                <path fillRule="evenodd" d="M5.456 4.975a.6.6 0 0 0 0 .85l13.2 13.2a.6.6 0 1 0 .85-.85l-13.2-13.2a.6.6 0 0 0-.85 0Z" clipRule="evenodd"></path>
            </svg>
            <div id="nav-links">
                <NavLinks togglePage={null}/>
            </div>
        </nav>
    );
}

export function Navbar({ toggleNavPane }){
    /**
     * brings selected page into view
     */
    function togglePage(event){
        let display=getComputedStyle(document.body).getPropertyValue("--display");
        /**
         * normal link functionality is used
         * when the webpage is viewed on smaller devices
        */
        if(display==='"normal"'){
            event.preventDefault();
            let selectedPage=event.target.innerText.toLowerCase();
            if(CURRENT===selectedPage) return;
            // prevent user from loading another page
            disableButtons();
            
            let currentPage=document.getElementById(CURRENT);
            let currentIndex=SEQUENCE.indexOf(CURRENT);
            let nextIndex=SEQUENCE.indexOf(selectedPage);
            let direction=(currentIndex-nextIndex>0)? -1 : 1;
        
            currentPage.style.left=`${-1*direction*100}%`;
            for(let i=currentIndex+direction;;i+=direction){
                let thisPage=document.getElementById(SEQUENCE[i]);
                // unhides the hidden pages
                thisPage.style.opacity="1";
                thisPage.style.left="0";
                if(SEQUENCE[i]===selectedPage) break;
                /**
                 * hides the pages between current page and selected page
                 * thus removing the overlapping effect
                 */
                thisPage.style.opacity="0";
                thisPage.style.left=`${-1*direction*100}%`;
            }
        }
    }

    return (
        <nav id="navbar">
            <a
                id="logo" href="#welcome"
                className={`${blackOpsOne.className}`}
            >GM</a>
            <div id="links">
                <NavLinks togglePage={togglePage}/>
                <svg className="button toggle-nav-pane" fill="#333333" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={toggleNavPane}>
                    <path fillRule="evenodd" d="M4.92 17.28a.6.6 0 0 1 .6-.6h12a.599.599 0 1 1 0 1.2h-12a.6.6 0 0 1-.6-.6Zm0-4.8a.6.6 0 0 1 .6-.6h12a.599.599 0 1 1 0 1.2h-12a.6.6 0 0 1-.6-.6Zm0-4.8a.6.6 0 0 1 .6-.6h12a.6.6 0 1 1 0 1.2h-12a.6.6 0 0 1-.6-.6Z" clipRule="evenodd"></path>
                </svg>
            </div>
        </nav>
    );
}