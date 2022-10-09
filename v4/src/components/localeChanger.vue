<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option value="fr">
        French
      </option>
      <option value="en">
        English
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'locale-changer'
}
</script>

<style>
select{
  padding: 5px;
  cursor: pointer;
  border: none;
  background-color: white;
  -webkit-box-shadow: 0 0 11px 4px rgba(0,0,0,0.08);
  box-shadow: 0 0 11px 4px rgba(0,0,0,0.08);
}
</style>
