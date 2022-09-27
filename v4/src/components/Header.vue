<template>
  <header>
    <a href="./" class="sideTitle">HOME</a>
    <nav id="basicNav">
        <div class="container">
          <router-link to="/#work">WORK</router-link>
        </div>
        <div class="container">
          <router-link to="/#about">ABOUT ME</router-link>
        </div>
        <div class="container">
          <router-link to="/#cvContainer">CV</router-link>
        </div>
        <div class="container">
          <router-link to="/#contact">CONTACT</router-link>
        </div>

    </nav>

    <div id="burger">
      <img src="../assets/burger-bar.png" alt="burger menu" @click="this.burgerOpen=true">

      <img id="closeCross" src="../assets/cross.png" alt="close burger menu" @click="this.burgerOpen=false" v-if="this.burgerOpen">

      <div class="modal" v-if="burgerOpen">

        <div class="container">
          <router-link to="/#work" class="burgerNav">WORK</router-link>
        </div>
        <div class="container">
          <router-link to="/#about" class="burgerNav">ABOUT ME</router-link>
        </div>
        <div class="container">
          <router-link to="/#contact" class="burgerNav">CONTACT</router-link>
        </div>
      </div>

    </div>

    <!-- TODO FAIRE LE ONCLICK -> ouvrir le menu-->
    <!--
    <a href="#" id="more" class="sideTitle">
      <span id="leftDot">.</span>
      <span id="middleDot">.</span>
      <span id="rightDot">.</span>
    </a>
    -->
  </header>
</template>

<script>
export default {
  name: "Header-view",
  data() {
    return {
      burgerOpen:false,
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

  header{
    position: sticky;
    top: 0;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin:2px 5%;
    background-color: white;
  }

  header *{
    text-decoration: none;
    color:black;
  }

  nav{
    display: flex;
    flex-direction: row;
    gap: 10%;
    justify-content: center;
    align-items: center;
  }

  a{
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1vw;
  }

  .sideTitle{
    font-size: 1.75vw;
    font-weight: 700;
  }

  .container{
    white-space: nowrap;
  }

  #burger{
    display: none;
  }

  .modal{
    display: none;
  }

  @media (max-width: 800px) {
    #basicNav{
      display: none;
    }

    #burger{
      display: flex;
      cursor: pointer;
    }

    .modal{
      display: flex;
      position: fixed;
      top: 0;
      right: 0;
      width: 50vw;
      height: 100vh;
      background-color: grey;
      flex-direction: column;
      justify-content: center;
    }

    #closeCross{
      width: min(6.5%,20px);
      height: auto;
      position: absolute;
      right: 0;
      z-index: 999;
    }

    .burgerNav{
      font-size: 5vw;
    }

  }

  /* DEBUT ANIMATION BORDER BOTTOM ON HOVER D'UN a */
  a {
    position: relative;

  }

  a::after {
    position: absolute;
    content: "";
    width: 0;
    height: 3px;
    background-color: black;

    /*background-image: linear-gradient(
        90deg,
        hsl(210deg 93% 63%) 0%,
        hsl(213deg 71% 68%) 5%,
        hsl(214deg 47% 70%) 11%,
        hsl(209deg 23% 71%) 16%,
        hsl(110deg 6% 73%) 21%,
        hsl(59deg 23% 71%) 26%,
        hsl(55deg 44% 71%) 32%,
        hsl(54deg 62% 69%) 37%,
        hsl(54deg 78% 67%) 42%,
        hsl(54deg 92% 65%) 47%,
        hsl(52deg 99% 63%) 53%,
        hsl(47deg 100% 63%) 58%,
        hsl(42deg 100% 62%) 63%,
        hsl(37deg 100% 62%) 68%,
        hsl(32deg 100% 61%) 74%,
        hsl(26deg 100% 61%) 79%,
        hsl(21deg 100% 61%) 84%,
        hsl(15deg 100% 60%) 89%,
        hsl(9deg 100% 60%) 95%,
        hsl(0deg 99% 59%) 100%
    );*/
    right: 0;
    bottom: 0;
    transition: all 0.2s ease-in-out;
  }

  .container:hover a::after {
    width: 100%;
    left: 0;

  }
  /* FIN ANIMATION BORDER BOTTOM ON HOVER D'UN a */


</style>