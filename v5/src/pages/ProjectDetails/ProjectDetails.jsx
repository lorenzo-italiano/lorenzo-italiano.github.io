import "../../styles/pages/projectdetails.scss"
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import {ProjectContext} from "../../context/context";
import {useTranslation} from "react-i18next";
import HTMLReactParser from "html-react-parser";

const ProjectDetails = () => {

	const { id } = useParams()

	const { projects } = useContext(ProjectContext)

	const { t } = useTranslation()

	const navigate = useNavigate()

	useEffect( () => {
		window.scrollTo(0, 0)
	})

	return(
		<main id="projectDetails">
			<button onClick={ () => {
				navigate("/")}
			}>
				← {t("buttons.goBack")}
			</button>
			{ ( id > 0 && id <= 5 ) ?
				// FIXME
				<>
					<section id="introSection">
						<div id="titleIntro">
							<h1>{ projects[id-1].title}</h1>
							<h2>{ projects[id-1].subtitle }</h2>
						</div>
						<img src={projects[id-1].img} alt="project illustration"/>
						<p>{ HTMLReactParser(projects[id-1].description) }</p>
					</section>
					{
						projects[id - 1].sections.map( (section) => {
							return(
								<section className="otherSections">
									<h1>{section.title}</h1>
									<p>{ HTMLReactParser(section.description)}</p>
									{/*<img src={section.img}/>*/}
								</section>
							)
						})
					}
				</>

				: <Navigate to="/error" state={{errorMessage:"Error 404 : This project doesn't exist"}}/>
			}
		</main>
	)
}

export default ProjectDetails
