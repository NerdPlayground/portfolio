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

function Body({ description, objectives, tools, edit }){
    const size=30;
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
            {edit &&
            <div className="edits">
                <Image className="crud-icons" src="/trash.png" width={size} height={size} alt="trash"/>
                <Image className="crud-icons" src="/pencil.png" width={size} height={size} alt="pencil"/>
            </div>}
        </>
    )
}

function Experience({ experiences, edit }){
    return (
        <div 
            id="experience"
            className={`content-container ${cutiveMono.className}`}
        >
            <div className={`content-title ${blackOpsOne.className}`}>
                EXPERIENCE
                {edit && <Image className="crud-icons" src="/plus.png" width={30} height={30} alt="plus"/>}
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
                        tools={experience.tools} edit={edit}
                    />
                </div>
            )}
        </div>
    );
}

function Projects({ projects, edit }){
    return (
        <div 
            id="projects"
            className={`content-container ${cutiveMono.className}`}
        >
            <div className={`content-title ${blackOpsOne.className}`}>
                PROJECTS
                {edit && <Image className="crud-icons" src="/plus.png" width={30} height={30} alt="plus"/>}
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
                        tools={project.tools} edit={edit}
                    />
                </div>
            )}
        </div>
    );
}

export default function ShowCase({ email, first_name, projects, experiences }){
    const showcase=useRef(null);
    const { refs,addRef }=useContext(Reference);
    useEffect(()=>addRef({showcase:showcase.current.style}),[addRef]);

    return (
        <section id="content-overflow" ref={showcase}>
            <section id="content-section">
                <Projects projects={projects} edit={refs.edit}/>
                <Experience experiences={experiences} edit={refs.edit}/>
                <Contact email={email} first_name={first_name} edit={refs.edit}/>
            </section>
        </section>
    );
}