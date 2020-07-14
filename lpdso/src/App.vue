<template>
  <div id="app">
    <NavBar></NavBar>
    <MainSection></MainSection>
    <ScreenSection></ScreenSection>
    <ClassSection></ClassSection>
    <section class="container container-custom">
      <div style="min-height:300px; background: lightgray">
        <carousel-3d :autoplay="true" :autoplay-timeout="5000" :controls-visible="true" :controls-prev-html="'&#10092;'" :controls-next-html="'&#10093;'">
          <slide :index="0">
            <img src="./assets/360x270.png" />
          </slide>
          <slide :index="1">
            <img src="./assets/360x270.png" />
          </slide>
        </carousel-3d>
      </div>
      <div class="text-center" style="position:relative; top:-20px;" >
        <button class="btn btn-primary">Play Now</button>
      </div>
      <div class="p-2"></div>
      <h2 class="text-center">Join our community</h2>
      <div class="p-4"></div>
      <div class="row justify-content-center">
        <div class="col-sm-3 text-center">
          <button class="btn btn-primary">Join</button>
        </div>
        <div class="col-sm-3 text-center">
          <button class="btn btn-primary">Visit web</button>
        </div>
      </div>
      <div class="p-5"></div>
    </section>
    <footer></footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import MainSection from './components/Main.vue'
import ScreenSection from './components/ScreenSection.vue'
import ClassSection from './components/ClassSection.vue'
import { Carousel3d, Slide } from 'vue-carousel-3d';


export default {
  name: 'App',
  components: {
    NavBar,MainSection,ScreenSection,ClassSection,Carousel3d, Slide
  }
}
</script>

<style>
/**
#251302
#422a2d
#674235
#956857
#a87145
#2c0c19
 */
body{ background:#251302;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
}
.container.container-custom{ max-width: 1640px; }
.backgroundmain{ background:lightgray; min-height: 500px; height:70vh; }
.row-cont-1{ background:orange;height:500px; }
.navclass-item { transition: all ease .5s; }
.navclass-item.active { transform: translate(0px, -25%); box-shadow: 0px 10px 12px 0px #ff6700; border-radius: 0.5em; }
</style>
