<template>
    
    <div class="row mb-3 row-cont-1" v-if="item.active">
        <div class="respVideo1" style="position: absolute; width: 63%; height: 100%;">
            <video-background  :src="require(`../assets/videos/${item.videoclass}`)" style="max-height: 100%; height: 100vh;" ></video-background>
        </div>
        <div class="col-lg-6 col-md-5 respDiv1" style="position:relative;">
            <!-- src="https://avidofood.github.io/vue-responsive-video-background-player/demo/public/videos/roadster-loop-imperial.mp4" -->             
        </div>
        <div class="col-lg-6 col-md-7 col-sm-12" style="position:relative;">
            <div class="row h-100">
                <div class="col-lg-5 col-md-4 col-6 respDiv2">
                    <div class="vivify animationObject driveInLeft" style="height:400px; width:300px;">
                        <div style="height:400px; width:300px; position: absolute; bottom: 0;">
                            <img ref="imgclass" :src="require(`../assets/pj/${item.imgclass}`)" class="img-fluid pjclass" v-bind:class="[item.imgAttrClass]" v-bind:style="item.imgAttrStyle" />
                        </div>
                    </div>
                </div>
                <div class="col-lg-7 col-md-8 col-sm-6 pt-3 vertical-center">
                    <h1 class="titleClassContent1">{{item.classname}}</h1>
                    <h4 class="titleClassContent2">{{item.classdesc}}</h4>
                    <div class="text-center">
                        <a type="button" href="https://darkstory2d.com/download.php" target="__blank" class="btn myButtonT3">Play Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import videoBackground from 'vue-responsive-video-background-player'
export default {
    props:['item'],
    components:{
        videoBackground
    },
    methods:{
        
    },
    data(){
        return {};
    },
}
</script>