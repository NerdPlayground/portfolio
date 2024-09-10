"use client";
import Contact from "./contact";
import { data } from "../lib/data";
import styles from "./colors.module.css";
import { blackOpsOne, cutiveMono } from "../ui/fonts";

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
    return (
        <>
            <div className="description">{description}</div>
            <ul className="objectives">{
                objectives.map(objective=>
                    <li key={objective}>{objective}</li>
                )
            }</ul>
            <div className="tools">{
                tools.map(tool=>
                    <span key={tool} className={styles[tool.toLowerCase()]}>
                        {tool}
                    </span>
                )
            }</div>
        </>
    )
}

function Experience(){
    const experiences=data.experiences;

    return (
        <div 
            id="experience"
            className={`content-container ${cutiveMono.className}`}
        >
            <span className={`content-title ${blackOpsOne.className}`}>
                EXPERIENCE
            </span>
            {experiences.map(experience=>
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

function Projects(){
    const projects=data.projects;

    return (
        <div 
            id="projects"
            className={`content-container ${cutiveMono.className}`}
        >
            <span className={`content-title ${blackOpsOne.className}`}>
                PROJECTS
            </span>
            {projects.map(project=>
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

export default function ShowCase(){
    return (
        <section id="content-overflow">
            <section id="content-section">
                <Projects/>
                <Experience/>
                <Contact/>
            </section>
        </section>
    );
}