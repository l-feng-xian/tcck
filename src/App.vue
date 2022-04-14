<template>
  <div class="app-box">
    <div class="app-box-title positionbg">图圈查控驾驶舱</div>

    <div class="app-box-left positionbg"></div>

    <div class="app-box-right positionbg"></div>

    <div class="app-box-down positionbg"></div>

    <div class="app-contnet">
      <div class="app-content-l">
        <div class="app-content-l-box">
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
      </div>
      <div class="app-content-c"></div>
      <div class="app-content-r">
        <div class="app-content-r-box">
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
  background-color: #0B1223;
}

.positionbg {
  position: fixed;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.app-box-title {
  top: 0;
  left: 0;
  right: 0;
  height: 105px;
  background-image: url(./assets/images/titleTop.png);
  background-position: center -2px;
  z-index: 999;
}

.app-box-left {
  top: 0;
  left: 0;
  bottom: 0;
  width: 74px;
  background-image: url(./assets/images/leftbg.png);
  z-index: 999;
}

.app-box-right {
  top: 0;
  right: 0;
  bottom: 0;
  width: 74px;
  background-image: url(./assets/images/rightbg.png);
  z-index: 999;
}

.app-box-down {
  bottom: 0;
  left: 0;
  right: 0;
  height: 97px;
  background-image: url(./assets/images/down.png);
  background-position: center 2px;
  background-size: 120% 100%;
  z-index: 99;
}

.app-contnet {
  width: 100%;
  height: 100%;
  display: flex;
}

.app-content-l,
.app-content-r {
  flex: 1.9;
  /* background-color: pink; */
  position: relative;
}

.app-content-l {
  background-image: url(./assets/images/contentleft.png);
  background-size: 130% 100%;
  background-position: 90% 0%;
}

.app-content-r {
  background-image: url(./assets/images/contentright.png);
  background-size: 118% 100%;
  background-position: 0% 0%;
}

.app-content-l-box {
  position: absolute;
  top: 105px;
  left: 96px;
  bottom: 97px;
  right: 36%;
  background-color: pink;
}

.app-content-r-box {
  position: absolute;
  top: 105px;
  right: 96px;
  bottom: 97px;
  left: 36%;
  background-color: pink;
}

.app-content-c {
  flex: 1;
}
</style>
