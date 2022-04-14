<template>
  <div class="base-title">
      <span></span>
      <p>{{props.title}}</p>
      <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
    title: String
})
</script>

<style scoped>
.base-title {
  width: 100%;
  height: 40px;
  display: flex;
}
</style>