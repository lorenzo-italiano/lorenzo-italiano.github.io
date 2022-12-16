import "../../styles/components/bannerView.scss"
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";

import profileImage from "../../assets/profile_img.jpg"
import downArrow from "../../assets/icons/down-arrow.png"


function BannerView() {

    const { t } = useTranslation()

    return (
        <div id="banner">

            <div>
                <motion.div initial={{opacity:0,x:-200}} animate={{ opacity:1, x:0}} transition={{duration: 1.5}}>
                    <h2>{t("banner.subtitle") }</h2>
                    <h1>{t("banner.title") }</h1>
                </motion.div>
            </div>

            <div>
                <motion.img initial={{opacity:0,y:200}} animate={{ opacity:1, y:0}} transition={{duration: 1.5}} src={profileImage} alt="profile image" />
            </div>

            <motion.a
                href="/#work"
                id="dropDownImg"
                animate={
                    {
                        y: ["-20px", "-10px", "0px", "10px", "20px"],
                        opacity: [1, 0.8, 0.5, 0.2 ,0],
                    }
                }
                transition={{ ease: "linear", duration: 1.5, repeat: Infinity }}
            >
                <img src={downArrow} alt="go down" />
            </motion.a>


        </div>

    )
}

export default BannerView
