<template>
  <div id="app">
    <NavBar></NavBar>
    <MainSection id="home"></MainSection>
    <ScreenSection></ScreenSection>
    <ClassSection></ClassSection>
    <section id="newsection" class="container container-custom backsectionslider pb-3">
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
        <a href="https://darkstory2d.com/download.php" target="__blank" class="btn myButtonT2">PLAY FREE NOW</a>
      </div>
      <div class="p-2"></div>
      <h2 class="text-center position-relative" style="z-index:20;"><span style="background: #d8cab8a6;">Join our community</span></h2>
      <div class="p-4"></div>
      <div class="row justify-content-center">
        <div class="col-sm-3 text-center">
          <a href="https://discordapp.com/invite/2FDgFh3" target="__blank" class="btn myButtonT4">Join</a>
        </div>
        <div class="col-sm-3 text-center">
          <a href="https://darkstory2d.com/" target="__blank" class="btn myButtonT3">Visit web</a>
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
.row-cont-1{ background: #2d2132; height:500px; position:relative; color:white;}
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
  .titleClassContent1 {color: #9b5b2b; text-shadow: 2px 2px 2px #d6b377; font-weight: bold; font-size: xxx-large;}
  .titleClassContent2 { text-shadow: 2px 2px 4px #3c2714; }
  
  .myButton,.myButtonT2,.myButtonT3,.myButtonT4 {
    box-shadow:inset 0px 39px 0px -24px #5f4f35;
    background:linear-gradient(to bottom, #7d5d3b 5%, #1d3828 100%);
    background-color:#7d5d3b;
    border-radius:4px;
    border:1px solid #54381e;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:21px;
    padding:13px 15px;
    text-decoration:none;
    text-shadow:0px 1px 0px #4d3534;
  }
  .myButtonT2{
    box-shadow:inset 0px 39px 0px -24px #a78d67;
    background:linear-gradient(to bottom, #7d5d3b 5%, #a48962 100%);
    text-shadow:0px 1px 0px #4d3534;
  }
  .myButtonT3{
    box-shadow:inset 0px 39px 0px -24px #ce8130;
    background:linear-gradient(to bottom, #a36d49 5%, #cd7f2c 100%);
    text-shadow:0px 1px 0px #4d3534;
  }
  .myButtonT4 {
    box-shadow:inset 0px 39px 0px -24px #b568b2;
    background:linear-gradient(to bottom, #a4599d 5%, #6c4eb9 100%);
  }
  
  .myButton:hover {
    background:linear-gradient(to bottom, #634b30 5%, #7d5d3b 100%);
    background-color:#634b30;
    color:#edb052;
  }
  .myButtonT2:hover{ 
    background:linear-gradient(to bottom, #634b30 5%, #d8cab8 100%);
    background-color:#634b30;
  }
  .myButtonT3:hover{
    background:linear-gradient(to bottom, #a36d49 5%, #6f400e 100%);
    box-shadow:inset 0px 39px 0px -24px #a98055;
  }
  .myButton:active {
    position:relative;
    top:1px;
  }
  .vertical-center { margin-top: auto; margin-bottom: auto;}
  .img-fluid{ width:100%; }
  /* @media (min-width: 768px){
    .navbar-expand-lg .navbar-collapse {
        display: -ms-flexbox!important;
        display: flex!important;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
    }
  } */
  @media screen and (max-width: 768px) {
    .respDiv1{ display:none; }
    .respVideo1{ width:100%!important; }
  }
  @media screen and (max-width:765px){
    .respDiv3{  text-align: center; }
    .respImg1{ width:20%; }
    .respText1{ font-size: xx-large; font-weight: bold; background: #d197748a; }
    .respText2{ background: #d1977494; }
    .respText3{ background: #d19774c9; font-weight: 700; }
  }
  @media screen and (max-width:575px){
    .respDiv2 { display:none; }
  }
  @media screen and (max-width:450px){
    .respText1{ font-size: x-large; }
    .respText2{ font-size:large; font-weight: bold; }

    .respText3{ overflow: auto; height: 100px; }
  }
</style>
