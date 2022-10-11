<template>
  <div class="locale-changer">
    <img v-if="$i18n.locale==='fr'" @click="$i18n.locale='en'" src="../assets/icons8-la-france-48.png" alt="french flag (change to french language">
    <img v-if="$i18n.locale==='en'" @click="$i18n.locale='fr'" src="../assets/united-kingdom.png" alt="uk flag (change to english language)">
  </div>
</template>

<script>
export default {
  name: 'locale-changer'
}
</script>

<style>
  img{
    width: 32px;
    cursor: pointer;
  }

  .locale-changer{
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
