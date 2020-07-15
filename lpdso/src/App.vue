<template>
  <div id="app">
    <NavBar></NavBar>
    <MainSection></MainSection>
    <ScreenSection></ScreenSection>
    <ClassSection></ClassSection>
    <section class="container container-custom" style="background:#d8cab8;">
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
main { margin-top: 57px; }
.container.container-custom{ max-width: 1640px; }
.backgroundmain{ background:url('./assets/dsodragonarmor2.png'); background-color:#d19774; min-height: 500px; height:70vh; 
background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-position-x: 40%;

}
.backgroundmain::before{
      content: '';
    width: 98%;
    height: 25%;
    background-image: linear-gradient(to bottom right, #f42a18, #c98b6c);
    opacity: 0.19;
    position: absolute;
    border-top-right-radius: 5em;
}
.row-cont-1{ background: #744e34; height:500px; }
.navclass-item { transition: all ease .5s; }
.navclass-item.active { transform: translate(0px, -25%); box-shadow: 0px 10px 12px 0px #00eaff; border-radius: 0.5em; }
.navbar {  border-bottom: 4px solid #a86741; border-bottom-left-radius: 1.4em;}
.navbar-dark{ background-color:#3c2714!important; /*#3c2714  5d3e2a*/ }
.navbar-brand img { max-height: 28px; transform: scale(1.8); }
</style>
