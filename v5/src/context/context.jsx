import { createContext, useState } from "react";
import vignetteAles from "../assets/vignettes/vignette_Mines.png"
import vignetteRaspberry from "../assets/vignettes/vingette_raspberry.jpg"
import vignetteReactShowcase from "../assets/vignettes/vignette_reactShowcase.png"
import vignetteChatC from "../assets/vignettes/vignette_chat_C.png"
import vignetteUngoogle from "../assets/vignettes/vignette_nextcloud.webp"

export const ProjectContext = createContext( {projects: []})

export const ContextProvider = ({children}) => {
    const [projects,setProjects] = useState( [
        {
            id: 1,
            title: "Front-End Practices",
            subtitle: "",
            description: "Here are some of my sample front-end projects that I do to learn some new technologies, libraries or new things to do such as light/dark mode switch for instance. Github link: <a href=\"https://github.com/lorenzo-italiano/ReactShowcase\">https://github.com/lorenzo-italiano/ReactShowcase</a>(might be in private at the moment).",
            img:vignetteReactShowcase,
            sections: [
                { title: "Countries Flag App", description: "I made this project to learn how to make dark/light themes in the first place. I also learned to do some pagination, a little bit of page transitions with react-motion library.", img:{} },
                { title: "ReactMotion Practice", description: "I made this little project to learn more about react-motion, how to animate items in a page, when you scroll, hover or have any other interaction with it.", img:{} },
            ]
        },
        {
            id: 2,
            title: "Chat in C",
            subtitle: "",
            description: "quick description",
            img:vignetteChatC,
            sections: [
                { title: "The objective", description: "The purpose of the project ", img:{} },
                { title: "The difficulties", description: "The main difficulties", img:{} },
                { title: "What did I learn from the project", description: "I learned ", img:{} }
            ]
        },
        {
            id: 3,
            title: "Raspberry school project",
            subtitle: "",
            description: "quick description",
            img:vignetteRaspberry,
            sections: [
                { title: "The objective", description: "The purpose of the project ", img:{} },
                { title: "The difficulties", description: "The main difficulties", img:{} },
                { title: "What did I learn from the project", description: "I learned ", img:{} }
            ]
        },
        {
            id: 4,
            title: "CESAR Simulation for crisis management",
            subtitle: "Internship at Mines Alès, 5 of April - 25 of June 2021",
            description: "This project is made by a research lab (Laboratoire des Sciences des Risques) of Mines d'Alès school of engineering. It is a simulation called CESAR which describes a city where you can test different crisis such as a fire. Then you can control agents such as firefighters to contain the crisis.",
            img:vignetteAles,
            sections: [
                { title: "The objective", description: "The purpose of the project is to train the elected representatives to make the best decisions in case of a crisis such as described by the simulation.", img:{} },
                { title: "The difficulties", description: "The main difficulties where about Gama which is the programming language we used. Because it's a language made by researchers and it's still in development. Sometimes we were figuring out bugs and features that weren't yet developed on the go.", img:{} },
                { title: "What did I learn from the project", description: "I learned Gama / Agent-Oriented Programming / Communicating with a team that wasn't only computer scientists", img:{} }
            ]
        },
        {
            id: 5,
            title: "Ungoogle project",
            subtitle: "2nd year UIT Project - late 2020 / early 2021",
            description: "This was the 2nd year project during my studies in the UIT (University Institute of Technology). The purpose of this was to make realistic projects for all students in groups of 3 or 4 with a real client and a real project to achieve. In my group we were 3 (Enzo Dardaillon, Germain Galtier and myself). Our subject was to ungoogle a smartphone, meaning to clear the phone out of all FAANG products (mostly all Google products) to try to achieve the best level of protection and open source possible. The main purpose was to make secured smartphones for employees of big companies.",
            img:vignetteUngoogle,
            sections: [
                { title: "The objective", description: "For this project we had multiple objectives given by our client. Firstly, we needed to do an analysis on a smartphone files to discover how an android phone is made. Then we needed to try to find out how to change the OS of the phone and also find the best OS to do a secured smartphone. We then needed to do the operations needed to achieve the OS swap. Lastly we needed to make a secured cloud the simplest way possible to ensure a cloud that could be installed and stored easily on any company server to avoid employees using other company dependant clouds such as google drive.", img:{} },
                { title: "The difficulties", description: "The main drawback was that we had never worked on android before. We didn't know anything about it and so we were discovering everything on the go. Also it was a lot of research, try and failure, comparing the best technologies to use, and this was a bit hard to manage.", img:{} },
                { title: "What did I learn from the project", description: "In this project I learned a lot about how android works, I learned android related technologies such as adb. I also learned about open source OS's and mostly about LineageOS. Also learned a lot about apache servers, how to deploy one with docker and deploying a simple cloud on it in our client's server.", img:{} }
            ]
        }
    ])

    return(
        <ProjectContext.Provider value={ {projects, setProjects} }>
            {children}
        </ProjectContext.Provider>
    )

}