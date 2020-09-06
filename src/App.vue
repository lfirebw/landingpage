<template>
  <div id="app">
    <NavBar></NavBar>
    <MainSection></MainSection>
    <ScreenSection></ScreenSection>
    <ClassSection></ClassSection>
    <section class="container container-custom backsectionslider pb-3">
      <div style="min-height:300px; background: #b9aa98">
        <carousel-3d :autoplay="true" :width="450" :height="250" :autoplay-timeout="5000" :controls-visible="true" :controls-prev-html="'&#10092;'" :controls-next-html="'&#10093;'">
          <slide :index="0">
            <img src="./assets/slider/Active_Community.png" />
          </slide>
          <slide :index="1">
            <img src="./assets/slider/Character_Customization.png" />
          </slide>
          <slide :index="2">
            <img src="./assets/slider/Mounts_System.png" />
          </slide>
          <slide :index="3">
            <img src="./assets/slider/Professions.png" />
          </slide>
          <slide :index="4">
            <img src="./assets/slider/PvP_Arena.png" />
          </slide>
          <slide :index="5">
            <img src="./assets/slider/Weekly_Events.png" />
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
      <div class="p-5" style="background: #b9aa98; border-radius: 3em 0 0em 9em;"></div>
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
.backsectionslider { position:relative;background-color:#d8cab8; }
.backsectionslider:before { content:''; position: absolute; width: 100%; max-width: 500px; max-height: 490px; height: 100%; bottom: 1%; background:url('./assets/dsomonsta.png');background-size: contain; background-repeat: no-repeat; background-position: left; }
.backgroundmain{ background:url('./assets/dsodragonarmor2.png'); background-color:#d19774; min-height: 500px; height:70vh; position: relative; background-size: contain; background-position: center; background-repeat: no-repeat; background-position-x: 40%; }
.backgroundmain::before{
      content: '';
    width: 98%;
    height: 25%;
    background-image: linear-gradient(to bottom right, #f42a18, #c98b6c);
    opacity: 0.19;
    position: absolute;
    border-top-right-radius: 5em;
}
.row-cont-1{ background: #744e34; height:500px; position:relative; color:white;}
.navclass-item { transition: all ease .5s; cursor:pointer; }
.navclass-item.active { transform: translate(0px, -25%); box-shadow: 0px 10px 12px 0px #00eaff; border-radius: 0.5em; }
.navbar {  border-bottom: 4px solid #a86741; border-bottom-left-radius: 1.4em;}
.navbar-dark{ background-color:#3c2714!important; /*#3c2714  5d3e2a*/ }
.navbar-brand img { max-height: 28px; transform: scale(1.8); }
.thumbnail { max-width:246px; cursor:pointer; }
.pjclass { transform: scale(1.3); position: absolute; bottom: 0;}
.nav-socialink{ 
  list-style-type: none;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
    /* display: inline-block; */
    display: flex;
 }
 .nav-socialink li {    display: inline-block;
    padding: 5px 0px;
    background: #744e34;
    /* height: 100%; */
    border-left: 1px solid #a86741;
    border-right: 1px solid #251302; transition: background ease-in .15s; }
    .nav-socialink li:first-child { border-top-left-radius: .3em; }
    .nav-socialink li:last-child{ border-top-right-radius: .3em; }
 .nav-socialink li > a {    color: #edb052;
    width: 20px;
    height: 100%;
    padding: 5px 20px;
    white-space: nowrap; }
  .nav-socialink li:hover { background: #353932 }
  .nav-socialink li:hover > a { color:#7a912f; }
</style>
