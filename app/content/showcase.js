"use client";
import Contact from "./contact";
import { blackOpsOne, cutiveMono } from "../ui/fonts";
import { useContext, useEffect, useRef } from "react";
import { Reference } from "../lib/context";
import Image from "next/image";

function Header({ name, link, start_date, end_date, ongoing }){
    const shorten_date=(date)=>{
        const [year,month,day]=date.split("-")
        return `${month}/${year.slice(2)}`;
    };

    return (
        <div className="period-title">
            <span className="period">{`
                ${shorten_date(start_date)} - 
                ${ongoing? "Present":shorten_date(end_date)}
            `}</span>
            <a className="title" href={link} target="_blank">
                {name}
            </a>
        </div>
    );
}

function Body({ description, objectives, tools }){
    const size=35;
    return (
        <>
            <div className="description">{description}</div>
            {objectives.length?(
                <ul className="objectives">{
                    objectives.map(objective=>
                        <li key={objective}>{objective}</li>
                    )
                }</ul>
            ):""}
            <div className="tools">{
                tools.map(tool=><span key={tool}>{tool}</span>)
            }</div>
            <div className="edits">
                <Image className="crud-icons" src="/trash.png" width={size} height={size} alt="trash"/>
                <Image className="crud-icons" src="/pencil.png" width={size} height={size} alt="pencil"/>
            </div>
        </>
    )
}

function Experience({ experiences }){
    return (
        <div 
            id="experience"
            className={`content-container ${cutiveMono.className}`}
        >
            <div className={`content-title ${blackOpsOne.className}`}>
                EXPERIENCE
                <Image className="crud-icons" src="/plus.png" width={35} height={35} alt="plus"/>
            </div>
            {experiences?'':<div className={`experience-tile empty`}></div>}
            {experiences?.map(experience=>
                <div
                    key={experience.link}
                    className="experience-tile"
                >
                    <Header
                        name={experience.company}
                        link={experience.link}
                        start_date={experience.start_date}
                        end_date={experience.end_date}
                        ongoing={experience.ongoing}
                    />
                    <Body
                        description={experience.title}
                        objectives={experience.objectives}
                        tools={experience.tools}
                    />
                </div>
            )}
        </div>
    );
}

function Projects({ projects }){
    return (
        <div 
            id="projects"
            className={`content-container ${cutiveMono.className}`}
        >
            <div className={`content-title ${blackOpsOne.className}`}>
                PROJECTS
                <Image className="crud-icons" src="/plus.png" width={35} height={35} alt="plus"/>
            </div>
            {projects?'':<div className={`project-tile empty`}></div>}
            {projects?.map(project=>
                <div
                    key={project.link}
                    className="project-tile"
                >
                    <Header
                        name={project.name}
                        link={project.link}
                        start_date={project.start_date}
                        end_date={project.end_date}
                        ongoing={project.ongoing}
                    />
                    <Body
                        description={project.description}
                        objectives={project.objectives}
                        tools={project.tools}
                    />
                </div>
            )}
        </div>
    );
}

export default function ShowCase({ email, first_name, projects, experiences }){
    const showcase=useRef(null);
    const { addRef }=useContext(Reference);
    useEffect(()=>addRef({showcase:showcase.current.style}),[addRef]);

    return (
        <section id="content-overflow" ref={showcase}>
            <section id="content-section">
                <Projects projects={projects}/>
                <Experience experiences={experiences}/>
                <Contact email={email} first_name={first_name}/>
            </section>
        </section>
    );
}