<template>
  <div class="app-box">
    <div class="app-box-title">图圈查控驾驶舱</div>
    <div class="app-contnet">
      <div class="app-content-l">
        
        <div class="app-content-l-top">
          <base-title title="111"></base-title>
        </div>
        <div class="app-content-l-center">
          <base-title title="111"></base-title>
        </div>
        <div class="app-content-l-down">
          <base-title title="111"></base-title>
        </div>
      </div>
      <div class="app-content-c"></div>
      <div class="app-content-r">
        <div class="app-content-r-top">
          <base-title title="111"></base-title>
        </div>
        <div class="app-content-r-center">
          <base-title title="111"></base-title>
        </div>
        <div class="app-content-r-down">
          <base-title title="111"></base-title>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import baseTitle from './components/baseTitle.vue';
import { reactive } from 'vue'
const leftTopData = reactive({
  data: { s: 1 }
})
console.log(leftTopData, 'leftTopData');
</script>


<style>
@import './assets/css/reset.css';

.app-box {
  height: 100vh;
  width: 100vw;
}

.app-box-title {
  height: 50px;
  line-height: 50px;
  text-align: center;
}

.app-contnet {
  height: calc(100% - 50px);
  width: 100%;
  display: flex;
}

.app-content-l,
.app-content-r {
  flex: 1;
  background-color: pink;
}

.app-content-c {
  flex: 2;
}
</style>
