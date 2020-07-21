<template>
    
    <div class="row mb-3 row-cont-1" v-if="item.active">
        <div style="position: absolute; width: 63%; height: 100%;">
            <video-background  :src="require(`../assets/videos/${item.videoclass}`)" style="max-height: 100%; height: 100vh;" ></video-background>
        </div>
        <div class="col-sm-6" style="position:relative;">
            <!-- src="https://avidofood.github.io/vue-responsive-video-background-player/demo/public/videos/roadster-loop-imperial.mp4" -->             
        </div>
        <div class="col-sm-6" style="position:relative;">
            <div class="row h-100">
                <div class="col-6">
                    <div class="vivify animationObject driveInLeft" style="height:400px; width:300px;">
                        <div style="height:400px; width:300px; position: absolute; bottom: 0;">
                            <img :src="require(`../assets/pj/${item.imgclass}`)" class="img-fluid pjclass" />
                        </div>
                    </div>
                </div>
                <div class="col-6 pt-3">
                    <h1>{{item.classname}}</h1>
                    <h4>{{item.classdesc}}</h4>
                    <button type="button" class="btn btn-primary">Play Now</button>
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
    data(){
        return {};
    }
}
</script>