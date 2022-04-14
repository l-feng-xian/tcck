<template>
  <div class="base-title">
      <p class="base-title-text">{{'勤务支援'}}</p>
  </div>
</template>

<script setup>
const props = defineProps({
    title: String
})
</script>

<style scoped>
.base-title {
  width: 400px;
  height: 64px;
  background-image: url(../assets/images/titlebg.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: -30px;
}
.base-title-text {
  width: 100px;
  color: #fff;
  text-indent: 20px;
  line-height: 50px;
}
</style>