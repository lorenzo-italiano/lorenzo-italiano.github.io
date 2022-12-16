import "../../styles/components/footer.scss"
import {useTranslation} from "react-i18next";

// import light logos
import linkedinLogo from "../../assets/icons/linkedin-logo-light.png"
import githubLogo from "../../assets/icons/github-logo-light.png"
import gmailLogo from "../../assets/icons/gmail-logo-light.png"
import instagramLogo from "../../assets/icons/instagram-logo-light.png"


const Footer = () => {

    const { t } = useTranslation()

    return(
        <footer>
            <div id="copyrightAndTerms">
                <p>{ t("footer.copyright") }</p>
                <div id="links">

                    <a href="https://www.linkedin.com/in/lorenzo-italiano-dev/" target="blank">
                        <img src={linkedinLogo} alt="linkedIn link" />
                    </a>

                    <a href="mailto:lorenzo.italiano34@gmail.com" target="blank">
                        <img src={gmailLogo} alt="link to mail me" />
                    </a>

                    <a href="https://www.instagram.com/lorenzo_ita_/" target="blank">
                        <img src={instagramLogo} alt="instagram link" />
                    </a>

                    <a href="https://github.com/lorenzo-italiano/" target="blank">
                        <img src={githubLogo} alt="github link" />
                    </a>

                </div>
            </div>
        </footer>
    )
}

export default Footer