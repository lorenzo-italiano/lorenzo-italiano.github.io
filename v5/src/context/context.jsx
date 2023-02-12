import { createContext, useState } from "react";
import vignetteAles from "../assets/vignettes/vignette_Mines.png"
import vignetteRaspberry from "../assets/vignettes/vingette_raspberry.jpg"
import vignetteReactShowcase from "../assets/vignettes/vignette_reactShowcase.png"
import vignetteChatC from "../assets/vignettes/vignette_chat_C.png"
import vignetteUngoogle from "../assets/vignettes/vignette_nextcloud.webp"
import vignetteDataScience from "../assets/vignettes/vignetteDataScience.png"
import vignetteSoftwareEngineering from "../assets/vignettes/vignetteSoftwareEngineering.png"

export const ProjectContext = createContext( {projects: []})

export const ContextProvider = ({children}) => {
    const [projects,setProjects] = useState( [
        {
            id: 1,
            img:vignetteDataScience,
            sections: [
                { },
                { },
                { },
            ]
        },
        {
            id: 2,
            img:vignetteSoftwareEngineering,
            sections: [
                { },
                { },
                { },
            ]
        },
        {
            id: 3,
            img:vignetteReactShowcase,
            sections: [
                { },
                { },
            ]
        },
        {
            id: 4,
            img:vignetteChatC,
            sections: [
                { },
                { },
                { },
            ]
        },
        {
            id: 5,
            img:vignetteRaspberry,
            sections: [
                { },
                { },
                { },
            ]
        },
        {
            id: 6,
            img:vignetteAles,
            sections: [
                { },
                { },
                { },
            ]
        },
        {
            id: 7,
            img:vignetteUngoogle,
            sections: [
                { },
                { },
                { },
            ]
        }
    ])

    return(
        <ProjectContext.Provider value={ {projects, setProjects} }>
            {children}
        </ProjectContext.Provider>
    )

}