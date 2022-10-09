<template>

  <div id="banner">

    <div >
      <div>
        <h2>Hello, I'm Lorenzo ITALIANO</h2>
        <h1>Welcome to my Portfolio !</h1>
      </div>
    </div>

    <div>
      <img src="../assets/profile_img.jpg" alt="profile image">
    </div>

    <a href="/#work">
      <img src="../assets/down-arrow.png" alt="go down" id="dropDownImg">
    </a>


  </div>

</template>

<script>

export default {
  name: 'BannerView',
  components: {
  }
}
</script>

<style scoped>

#banner{
  min-width: 100vw;
  min-height: 92vh;
  display: grid;
  grid-template-columns: 50% 50%;
  /*background-image: url("../assets/ac.png");*/
  /*background-size: 30%;*/
  /*background-repeat: repeat;*/
}

#banner>div{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
}

#banner>div>img{
  width: 75%;
  border-radius: 50%;
}

h1{
  font-weight: bold;
  font-size: max(3vw, 20px);
}

h2{
  font-size: max(2vw, 18px);
}

#dropDownImg{
  position: absolute;
  bottom: 0;
  width: 70px;
  left: 50%;
  translate: -50%;
  cursor: pointer;
  z-index: 0;
}

@media screen and (max-width: 576px) {
  #banner{
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }
}

@media screen and (max-width: 780px) and (min-width: 576px) {

}

@media screen and (max-width: 992px) and (min-width: 780px) {

}

/*
@media screen and (min-width: 992px) and (min-width: 1200px){
}

@media screen and (min-width: 1200px) {
}*/

/*576px for portrait phones.
    768px for tablets.
    992px for laptops.
    1200px for large devices.*/

</style>