"use client";
import Image from "next/image";
import { useEffect } from "react";
import { data } from "../lib/data";
import { courierPrime, blackOpsOne, cutiveMono } from "../ui/fonts";

function Socials({ socials }){
    return (
        <div id="socials" className="welcome">{
            Object.entries(socials).map(socialLink=>
                <a
                    key={socialLink[0]}
                    target="_blank"
                    href={socialLink[1]}
                    className={`social-link`}
                >
                    <Image
                        src={`/socials/social-${socialLink[0]}-black.png`}
                        alt={socialLink[0]}
                        width={50} height={50}
                    />
                </a>
            )
        }</div>
    );
}

function SkillSet({ skills }){
    return (
        <div id="skill-set" className="welcome">
            <h2 className={`block-title  ${courierPrime.className}`}>
                Jack of <span>all</span> <span>MOST</span> trades.
            </h2>
            <div id="skills">{
                skills.map(skill=>
                    <span
                        key={skill}
                        className={`${cutiveMono.className}`}
                    >
                        {skill}
                    </span>
                )
            }</div>
        </div>
    );
}

function Introduction({ first_name, last_name, bio }){
    // controls the typing effect of the name
    useEffect(()=>{
        let name=Array.from(`${first_name} ${last_name}`.toUpperCase());
        let nameContainer=document.getElementById("name");
        let styles=getComputedStyle(nameContainer);
        let display=styles.getPropertyValue("display");
        if(display!=="none"){
            let counter=0;
            setTimeout(()=>{
                let writeName=setInterval(()=>{
                    nameContainer.textContent+=name[counter++];
                    if(counter>=name.length){
                        clearInterval(writeName);
                        setTimeout(()=>nameContainer.nextElementSibling.remove(),1000);
                    }
                },250);
            },1000);
        }
    },[first_name,last_name]);

    return (
        <div id="introduction" className="welcome">
            <h1 className={`block-title ${courierPrime.className}`}>
                <span id="hello">{`Hello there, I'm`}</span>
                <span>
                    <span id="name" className={`${blackOpsOne.className}`}></span>
                    <span id="cursor"></span>
                    <span id="static-name" className={`${blackOpsOne.className}`}>
                        {`GEORGE MOBISA`}
                    </span>
                </span>
            </h1>
            <div
                id="description"
                className={`${cutiveMono.className}`}
            >{
                `...${bio[0].toLowerCase()+bio.slice(1)}.`
            }</div>
        </div>
    );
}

export default function Welcome(){
    const
        details=data.details,
        profile=details.profile;

    return (
        <section id="welcome">
            <Introduction
                first_name={details.first_name}
                last_name={details.last_name}
                bio={profile.bio}
            />
            <SkillSet
                skills={profile.skills}
            />
            <Socials
                socials={profile.socials}
            />
        </section>
    );
}