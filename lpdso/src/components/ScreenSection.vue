<template>
    <section class="container container-custom">
		<div class="row">
			<div class="col-sm-3"> <div style="background:gray; height:120px; width:250px; margin:0 auto;" @click="openGallery(0)"></div></div>
			<div class="col-sm-3"> <div style="background:gray; height:120px; width:250px; margin:0 auto;"></div></div>
			<div class="col-sm-3"> <div style="background:gray; height:120px; width:250px; margin:0 auto;"></div></div>
			<div class="col-sm-3"> <div style="background:gray; height:120px; width:250px; margin:0 auto;"></div></div>
		</div>
		<LightBox ref="lightbox" :show-light-box="false" :media="media"></LightBox>
	</section>
</template>

<script>
import LightBox from 'vue-it-bigger'
import('vue-it-bigger/dist/vue-it-bigger.min.css')

export default {
	components:{
		LightBox
	},	
	data(){
		return {
			media: [
				{
					thumb: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-retrowave-design-template-facd275829297c4a471f2f1af6436508_screen.jpg?ts=1561496227',
					src: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-retrowave-design-template-facd275829297c4a471f2f1af6436508_screen.jpg?ts=1561496227'
				}
			]
		}
	},
	methods:{
		openGallery(index) {
			this.$refs.lightbox.showImage(index)
		}
	}
}
</script>