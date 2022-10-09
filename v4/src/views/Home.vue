<template>

  <BannerView></BannerView>

  <div class="category" id="work">
    <h1>{{ $t("work.title") }}</h1>

    <div class="categoryContent">
      <h2>{{ $t("work.subtitle") }}</h2>
      <img class="imgProjets" src="../assets/vignettes/vignette_MinesAles.png" alt="Mines Alès project">
      <img class="imgProjets" src="../assets/vignettes/vignette_Ungoogle.png" alt="Ungoogle project">

    </div>

    <div class="categoryContent">
      <h2>
        {{ $t("work.git-ad") }}
        <a href="https://github.com/lorenzo-italiano" target="_blank">{{ $t("work.here") }}</a>
      </h2>
    </div>


  </div>

  <div class="category" id="about">

    <h1>{{ $t("about-me.title")}}</h1>

    <div class="categoryContent">
      <h2>{{ $t("about-me.general.title")}}</h2>
      <div class="categorySubContent">

        <p>
          {{ $t("about-me.general.text1") }} <br>
          {{ $t("about-me.general.text2") }} <br>
          {{ $t("about-me.general.text3") }}
        </p>
      </div>
    </div>

    <div class="categoryContent">
      <h2>{{ $t("about-me.education.title") }}</h2>
      <div class="categorySubContent">
        <p>{{ $t("about-me.education.iut") }}</p>
        <p>{{ $t("about-me.education.polytech") }}</p>
      </div>
    </div>

    <div class="categoryContent">
      <h2>{{ $t("about-me.work-experience.title") }}</h2>
      <div class="categorySubContent">
        <p>{{ $t("about-me.work-experience.mines-ales") }}</p>
      </div>
    </div>

    <div class="categoryContent" id="cvContainer">
      <h1>{{ $t("about-me.cv") }}</h1>
      <a v-if="$i18n.locale==='en'" href="/img/English_CV.c879ed78.png" target="_blank" class="cvImgContainer">
        <img class="cvImg" src="../assets/English_CV.png" alt="CV">
      </a>
      <a v-if="$i18n.locale==='fr'" href="/img/CV_Français.8fb2884e.png" target="_blank" class="cvImgContainer">
      <img class="cvImg" src="../assets/CV_Français.png" alt="CV">
      </a>
    </div>


  </div>

  <div class="category" id="contact">
    <h1>{{ $t("contact.title") }}</h1>

    <div id="contactContentDiv" class="categoryContent">

      <div>
        <p>{{ $t("contact.intro") }}</p>
        <div class="categorySubContent">

          <a class="contactLinks" href="https://www.linkedin.com/in/lorenzo-italiano-dev/" target="blank">
            <img src="../assets/linkedin-logo-dark.png" alt="linkedIn logo" class="contactLinksImg">
            <p>{{ $t("contact.linkedin") }}</p>
          </a>

          <a class="contactLinks" href="mailto:lorenzo.italiano34@gmail.com" target="blank">
            <img src="../assets/gmail-logo-dark.png" alt="Gmail logo" class="contactLinksImg">
            <p>{{ $t("contact.email") }}</p>
          </a>

          <a class="contactLinks" href="https://www.instagram.com/lorenzo_ita_/" target="blank">
            <img src="../assets/instagram-logo-dark.png" alt="Instagram logo" class="contactLinksImg">
            <p>{{ $t("contact.instagram") }}</p>
          </a>

          <a class="contactLinks" href="https://github.com/lorenzo-italiano/" target="blank">
            <img src="../assets/github-logo-dark.png" alt="Github logo" class="contactLinksImg">
            <p>{{ $t("contact.github") }}</p>
          </a>

          <a class="contactLinks" href="https://discord.com/" target="blank">
            <img src="../assets/discord-logo-dark.png" alt="Discord logo" class="contactLinksImg">
            <p>{{ $t("contact.discord") }}</p>
          </a>

        </div>
      </div>

      <div id="contactImgDiv">
        <img id="contactImg" src="../assets/contact-img.jpg" alt="contact illustration">
      </div>

    </div>

  </div>

</template>

<script>
import BannerView from "@/components/Banner";
export default {
  name: 'HomeView',
  components: {
    BannerView
  }
}
</script>

<style scoped>

*{
  text-align: left;
}

p{
  font-size: max(1.2vw,14px);
}

.category{
  padding:2% 5%;
}

.categoryContent{
  padding:1% 5%;
}

.categorySubContent{
  padding: 10px 2.5%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

h1{
  font-weight: bold;
  font-size: max(2.5vw,20px);
}

h2{
  font-weight: bold;
  font-size: max(1.5vw,18px);
}

.imgProjets{
  width: 33%;
}

#contactContentDiv{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

#contactContentDiv>*{
  width: 50%;
}

#contactImg{
  width:75%;
}

#contactImgDiv{
  display: flex;
  align-items: center;
  justify-content: center;
}

.contactLinksImg{
  width: 26px;
}

.contactLinks{
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 10px;
  color: black;
  text-decoration: none; /* no underline */
}

.contactLinks:hover{
  text-decoration: underline;
}

.contactLinks > p{
  font-size: max(1.2vw,12px);
}

.cvImg{
  width: 100%;
  cursor: zoom-in;
}

.cvImgContainer{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
}

#cvContainer{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
/*@media screen and (max-width: 576px) {

}

@media screen and (max-width: 780px) and (min-width: 576px) {

}

@media screen and (max-width: 992px) and (min-width: 780px) {

}

@media screen and (min-width: 992px) and (min-width: 1200px){
}

@media screen and (min-width: 1200px) {
}*/

/*576px for portrait phones.
    768px for tablets.
    992px for laptops.
    1200px for large devices.*/

</style>