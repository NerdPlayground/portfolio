"use client";
import { Carousel } from './lib/context';
import useEmblaCarousel from 'embla-carousel-react';
import { useState, useEffect, useCallback } from 'react';
import { Content } from "@/app/content/main-content";
import { Navbar, Navpane } from "@/app/navigation/navbar";

export default function Root(){const [selectedIndex, setSelectedIndex]=useState(0);
    const [emblaMainRef,emblaMainApi]=useEmblaCarousel({});
    const [emblaThumbsRef,emblaThumbsApi]=useEmblaCarousel({
        dragFree: true,
        containScroll: 'keepSnaps',
    });

    const onThumbClick=useCallback(
        (index) => {
            if (!emblaMainApi || !emblaThumbsApi) return;
            emblaMainApi.scrollTo(index);
        },
        [emblaMainApi, emblaThumbsApi]
    );

    const onSelect=useCallback(()=>{
            if (!emblaMainApi || !emblaThumbsApi) return;
            setSelectedIndex(emblaMainApi.selectedScrollSnap());
            emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
        },
        [emblaMainApi, emblaThumbsApi, setSelectedIndex]
    );

    useEffect(()=>{
            if (!emblaMainApi) return;
            onSelect();
            emblaMainApi.on('select', onSelect).on('reInit', onSelect);
        },
        [emblaMainApi, onSelect]
    );

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
        <Carousel.Provider value={{
            mainRef: emblaMainRef,
            thumbsRef: emblaThumbsRef,
            togglePage: onThumbClick,
        }}>
            <Navpane toggleNavPane={toggleNavPane}/>
            <Navbar toggleNavPane={toggleNavPane}/>
            <Content/>
        </Carousel.Provider>
    );
}