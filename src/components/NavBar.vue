<template>
<nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
    <div class="container">
        <!-- <a class="navbar-brand" href="#"><img src="../assets/nav_logo.png" /></a> -->
        <button class="navbar-toggler" v-on:click="toggle()" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div ref="menuMobile" class="vivify animationObject driveInLeft collapse navbar-collapse row justify-content-between" id="navbarNav">

            <div class="col-lg-8 col-sm-6">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#home" v-smooth-scroll="{ duration: 2000, offset: -50 }">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#classsection" v-smooth-scroll="{ duration: 2000, offset: -50 }">Class</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#newsection" v-smooth-scroll="{ duration: 2000, offset: -50 }">News</a>
                    </li>
                </ul>
            </div>
            <div class="col-auto">
                <ul class="nav-socialink">
                    <li>
                        <a href="https://www.facebook.com/darkstoryonline" target="__blank">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/darkstoryonline" target="__blank">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCeT7emdH3Bx-w3-wrEjys_Q?&ab_channel=BraveWolf" target="__blank">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://discordapp.com/invite/2FDgFh3" target="__blank">
                            <i class="fab fa-discord"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    methods:{
        toggle(){
            this.$refs.menuMobile.classList.toggle('collapse')
        }
    },
    created(){
        
    }
}
</script>