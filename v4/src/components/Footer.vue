<template>
  <footer>
    <!-- TODO changer la police d'ecrire d'en dessous -->
    <div id="copyrightAndTerms">
      <p>
        Made with Vue3 - Lorenzo-ITALIANO, 2022©
      </p>
      <div id="links">

        <a href="https://www.linkedin.com/in/lorenzo-italiano-dev/" target="blank">
          <img src="../assets/linkedin-logo-light.png" alt="linkedIn link">
        </a>

        <a href="mailto:lorenzo.italiano34@gmail.com" target="blank">
          <img src="../assets/gmail-logo-light.png" alt="link to mail me">
        </a>

        <a href="https://www.instagram.com/lorenzo_ita_/" target="blank">
          <img src="../assets/instagram-logo-light.png" alt="instagram link">
        </a>

        <a href="https://github.com/lorenzo-italiano/" target="blank">
          <img src="../assets/github-logo-light.png" alt="github link">
        </a>

      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer-view"
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

  *{
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1vw;
    text-decoration: none;
    list-style-type:none;
    text-align: left;
  }
  footer{
    display: flex;
    flex-direction: column;
  }

  #copyrightAndTerms{
    background-color: #252422;
    color: white;
    padding: 1% 5%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #termsPolicy{
    display: flex;
    flex-direction: row;
  }

  #termsPolicy > a{
    color: gray;
  }

  main{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 2% 5%;
    background-color: #303030;
    color: #f4f4f4;
  }

  main > div{
    padding: 5%;
    width: 40%;
  }

  #footerLinks{
    display: flex;
    justify-content: space-between;
  }

  #footerSiteLogo *{
    font-size: 2vw;
    font-weight: 900;
  }

  #contactLink *{
    font-size: 2vw;
  }

  #stayInTheKnown *{
    font-size: 1.25vw;
  }

  #footerLinks *{
    font-size: 1.25vw;
  }

  a:hover{
    text-decoration: underline;
  }

  a{
    color: #f4f4f4;
  }

  .contactInfosFooter{
    text-decoration: underline;
  }

  #links>a>img{
    width: 16px;
  }


  #links{
    display: flex;
    align-items: center;
    gap: 10px;
  }

  #links>a{
    display:flex;
    align-items: center;
  }

  p{
    font-size: max(1.1vw,10px);
  }


</style>