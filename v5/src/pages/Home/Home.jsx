import {useTranslation} from "react-i18next"
import { motion } from "framer-motion"
import "../../styles/pages/home.scss"
import BannerView from "../../components/BannerView/BannerView";
import { useNavigate } from "react-router-dom";

// CV versions
import frenchCV from "../../assets/CV_Français.png"
import englishCV from "../../assets/English_CV.png"

// Logos
import linkedinLogo from "../../assets/icons/linkedin-logo-dark.png"
import githubLogo from "../../assets/icons/github-logo-dark.png"
import gmailLogo from "../../assets/icons/gmail-logo-dark.png"
import discordLogo from "../../assets/icons/discord-logo-dark.png"
import instagramLogo from "../../assets/icons/instagram-logo-dark.png"

// Illustrations
import contactIllustration from "../../assets/contact-img.jpg"
import {useContext, useEffect} from "react";
import {ProjectContext} from "../../context/context";
import {wait} from "@testing-library/user-event/dist/utils";


const Home = () => {

    const { t, i18n } = useTranslation()

    const { projects } = useContext(ProjectContext)

    const navigate = useNavigate()

    const downloadVariants = {
        hidden:{ opacity: 0},
        show:{ opacity: 1 , transition: { staggerChildren: 0.3}}
    }

    const downloadChildVariants = {
        hidden: {opacity: 0},
        show: {opacity: 1, transition: {duration: 0.5}}
    }

    return(
        <main id="home">

            <BannerView />

            <div className="category" id="work">
                <h1>{t("work.title")}</h1>

                <motion.div className="categoryContent" variants={downloadVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
                    <h2>{t("work.subtitle")}</h2>
                    <div className="projectsCatalogue">
                        { projects.map( (project) => {
                            return(
                                <motion.div
                                    className="card"
                                    variants={downloadChildVariants}
                                    onClick={() => {
                                        window.scrollTo(0, 0)
                                        wait(200).then(r => navigate("/projects/" + project.id))
                                        }
                                    }
                                >
                                    <img src={project.img} alt={t("projectsList." + (project.id-1) + ".title")} />
                                    <div className="info">
                                        <h3>{ t("projectsList." + (project.id-1) + ".title") }</h3>
                                        <p>{ t("projectsList." + (project.id-1) + ".subtitle") } </p>
                                    </div>
                                </motion.div>
                            )}
                        )}
                    </div>
                </motion.div>

                <div className="categoryContent" id="gitAd">
                    <h2>
                        {t("work.git-ad")}

                    </h2>
                    <a id="aLinkToGit" href="https://github.com/lorenzo-italiano" target="_blank">{t("work.here")}</a>
                </div>


            </div>

            <div className="category" id="about">

                <motion.h1 initial={{opacity:0, x: -200}} whileInView={{opacity:1, x:0, transition : {duration: 1}}} viewport={{ once: true }}>{t("about-me.title")}</motion.h1>

                <motion.div initial={{opacity:0, x: -200}} whileInView={{opacity:1, x:0, transition : {duration: 1}}} viewport={{ once: true }} className="categoryContent">
                    <h2>{t("about-me.general.title")}</h2>
                    <div className="categorySubContent">

                        <p>
                            {t("about-me.general.text1")} <br/>
                            {t("about-me.general.text2")} <br/>
                            {t("about-me.general.text3")}
                        </p>
                    </div>
                </motion.div>

                <motion.div initial={{opacity:0, x: -200}} whileInView={{opacity:1, x:0, transition : {duration: 1}}} viewport={{ once: true }} className="categoryContent">
                    <h2>{t("about-me.education.title")}</h2>
                    <div className="categorySubContent">
                        <p>{t("about-me.education.iut")}</p>
                        <p>{t("about-me.education.polytech")}</p>
                    </div>
                </motion.div>

                <motion.div initial={{opacity:0, x: -200}} whileInView={{opacity:1, x:0, transition : {duration: 1}}} viewport={{ once: true }} className="categoryContent">
                    <h2>{t("about-me.work-experience.title")}</h2>
                    <div className="categorySubContent">
                        <p>{t("about-me.work-experience.mines-ales")}</p>
                    </div>
                </motion.div>

                <motion.div initial={{opacity:0, x: -200}} whileInView={{opacity:1, x:0, transition : {duration: 1}}} viewport={{ once: true }} className="categoryContent" id="cvContainer">
                    <h1>{t("about-me.cv")}</h1>
                    {i18n.language === "en" &&
                        <a href="/static/media/English_CV.d4af0453167f65d1452b.png" target="_blank" className="cvImgContainer">
                            <img className="cvImg" src={englishCV} alt="CV"/>
                        </a>
                    }
                    {i18n.language === "fr" &&
                        <a href="/static/media/CV_Fran%C3%A7ais.90f609994634561abaf9.png" target="_blank" className="cvImgContainer">
                            <img className="cvImg" src={frenchCV} alt="CV"/>
                        </a>
                    }
                </motion.div>
            </div>

            <motion.div initial={{opacity:0, x: -200}} whileInView={{opacity:1, x:0, transition : {duration: 1}}} viewport={{ once: true }} className="category" id="contact">
                <h1>{t("contact.title")}</h1>

                <div id="contactContentDiv" className="categoryContent">

                    <div>
                        <p>{t("contact.intro")}</p>
                        <div className="categorySubContent">

                            <a className="contactLinks" href="https://www.linkedin.com/in/lorenzo-italiano-dev/" target="blank">
                                <img src={linkedinLogo} alt="linkedIn logo" className="contactLinksImg"/>
                                    <p>{t("contact.linkedin")}</p>
                            </a>

                            <a className="contactLinks" href="mailto:lorenzo.italiano34@gmail.com" target="blank">
                                <img src={gmailLogo} alt="Gmail logo" className="contactLinksImg"/>
                                    <p>{t("contact.email")}</p>
                            </a>

                            <a className="contactLinks" href="https://www.instagram.com/lorenzo_ita_/" target="blank">
                                <img src={instagramLogo} alt="Instagram logo" className="contactLinksImg"/>
                                    <p>{t("contact.instagram")}</p>
                            </a>

                            <a className="contactLinks" href="https://github.com/lorenzo-italiano/" target="blank">
                                <img src={githubLogo} alt="Github logo" className="contactLinksImg"/>
                                    <p>{t("contact.github")}</p>
                            </a>

                            <a className="contactLinks" href="https://discord.com/" target="blank">
                                <img src={discordLogo} alt="Discord logo" className="contactLinksImg"/>
                                    <p>{t("contact.discord")}</p>
                            </a>

                        </div>
                    </div>

                    <div id="contactImgDiv">
                        <img id="contactImg" src={contactIllustration} alt="contact illustration" />
                    </div>

                </div>

            </motion.div>
        </main>
    )
}

export default Home