<template>

  <div id="banner">

    <div>
      <div>
        <h2>Hello, I'm Lorenzo ITALIANO</h2>
        <h1>Welcome to my Portfolio !</h1>
      </div>
    </div>

    <div>
      <img src="../assets/profile_img.jpg">
    </div>

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
  min-height: 88vh;
  display: grid;
  grid-template-columns: 50% 50%;
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
  font-size: 3vw;
}

h2{
  font-size: 2vw;
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