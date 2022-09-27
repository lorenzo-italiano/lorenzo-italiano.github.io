<template>

  <BannerView></BannerView>

  <div class="category" id="work">
    <h1>My work</h1>


    <div class="categoryContent">
      <h2>Here are some of my projects</h2>
      <img class="imgProjets" src="../assets/vignettes/vignette_MinesAles.png" alt="Mines Alès project">
      <img class="imgProjets" src="../assets/vignettes/vignette_Ungoogle.png" alt="Ungoogle project">

    </div>

    <div class="categoryContent">
      <h2>
        If you want to see more of my work, you can check my git
        <a href="https://github.com/lorenzo-italiano" target="_blank">here</a>
      </h2>
    </div>


  </div>

  <div class="category" id="about">

    <h1>About me</h1>

    <div class="categoryContent">
      <h2>General</h2>
      <div class="categorySubContent">

        <p>
          I'm Lorenzo ITALIANO, 20 years old french student.<br/>
          Currently an engineering student in Computer Science and Management at Polytech Montpellier, France.<br/>
          My passions are computer sciences and sports.
        </p>
      </div>
    </div>

    <div class="categoryContent">
      <h2>Education</h2>
      <div class="categorySubContent">
        <p>
          2019-2021 | Technical University Diploma in Computer Sciences and management | IUT Montpellier-Sète | Montpellier, France
        </p>
        <p>
          2021-2024 | Engineering diploma in Computer Sciences and Management | Polytech | Montpellier, France
        </p>
      </div>
    </div>

    <div class="categoryContent">
      <h2>Work experience</h2>
      <div class="categorySubContent">
        <p>
          6 Avril 2021 - 25 Juin 2021 : Stage Laboratoire Sciences du Risque (LSR)

          Ecole des mines d'Alès

          Travail sur une simulation de gestion de crise en programmation multi-agent sous Gama
        </p>
      </div>
    </div>

    <div class="categoryContent" id="cvContainer">
      <h1>CV / Resume</h1>
<!--      <div class="categorySubContent">-->
<!--        <embed src="../assets/CV.pdf" type="application/pdf" width="100px" height="600px" />-->
<!--        &lt;!&ndash;<a target="_blank" href="/CV">Click here to see my CV</a>&ndash;&gt;-->
<!--      </div>-->
      <img class="cvImg" src="../assets/English_CV2022.png" alt="CV">
    </div>


  </div>

  <div class="category" id="contact">
    <h1>Contact me</h1>

    <div id="contactContentDiv" class="categoryContent">

      <div>
        <p>Don't hesitate to get in touch with me if you want to. You can reach me by the following social medias.</p>
        <div class="categorySubContent">

          <a class="contactLinks" href="https://www.linkedin.com/in/lorenzo-italiano-dev/" target="blank">
            <img src="../assets/linkedin-logo-dark.png" alt="linkedIn logo" class="contactLinksImg">
            <p>My LinkedIn profile</p>
          </a>

          <a class="contactLinks" href="mailto:lorenzo.italiano34@gmail.com" target="blank">
            <img src="../assets/gmail-logo-dark.png" alt="Gmail logo" class="contactLinksImg">
            <p>My email adress</p>
          </a>

          <a class="contactLinks" href="https://www.instagram.com/lorenzo_ita_/" target="blank">
            <img src="../assets/instagram-logo-dark.png" alt="Instagram logo" class="contactLinksImg">
            <p>My instagram profile</p>
          </a>

          <a class="contactLinks" href="https://github.com/lorenzo-italiano/" target="blank">
            <img src="../assets/github-logo-dark.png" alt="Github logo" class="contactLinksImg">
            <p>My github profile</p>
          </a>

          <a class="contactLinks" href="https://discord.com/" target="blank">
            <img src="../assets/discord-logo-dark.png" alt="Discord logo" class="contactLinksImg">
            <p>My Discord tag is Guldo#3033</p>
          </a>

        </div>
      </div>

      <div id="contactImgDiv">
        <img id="contactImg" src="../assets/contact-img.jpg">
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

.category{
  padding:2% 5%;
}

.categoryContent{
  padding:2% 5%;
}

.categorySubContent{
  padding: 0 7.5%;
}

h1{
  font-weight: bold;
  font-size: 2.5vw;
}

h2{
  font-weight: bold;
  font-size: 1.5vw;
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

.cvImg{
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