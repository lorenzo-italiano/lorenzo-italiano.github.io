import LanguageChanger from "../../components/LanguageChanger/LanguageChanger"
import {useTranslation} from "react-i18next"
import "../../styles/components/header.scss"
import {useState} from "react";
import {Link} from "react-router-dom";

import closeCross from "../../assets/icons/cross.png"
import burgerMenu from "../../assets/icons/burger-bar.png"

const Header = () => {

    const { t } = useTranslation()

    const [burgerOpen,setBurgerOpen] = useState(false)

    return(
        <header>
            <a href="/" className="sideTitle">{t("header.home")}</a>
            <nav id="basicNav">
                <div className="container">
                    <a href="#work">{t("header.work")}</a>
                </div>
                <div className="container">
                    <a href="#about">{t("header.about")}</a>
                </div>
                <div className="container">
                    <a href="#cvContainer">{t("header.cv")}</a>
                </div>
                <div className="container">
                    <a href="#contact">{t("header.contact")}</a>
                </div>
                <LanguageChanger />
            </nav>

            <div id="burger">
                <img src={burgerMenu} alt="burger menu" onClick={() => {setBurgerOpen(true)}} />

                {burgerOpen && <img id="closeCross" src={closeCross} alt="close burger menu" onClick={() => {setBurgerOpen(false)}} /> }

                {burgerOpen &&
                    <div className="modal">
                        <div className="container">
                            <a href="#work" className="burgerNav">{t("header.work")}</a>
                        </div>
                        <div className="container">
                            <a href="#about" className="burgerNav">{t("header.about")}</a>
                        </div>
                        <div className="container">
                            <a href="#contact" className="burgerNav">{t("header.contact")}</a>
                        </div>
                        <LanguageChanger />
                    </div>
                }
            </div>
        </header>
    )
}

export default Header