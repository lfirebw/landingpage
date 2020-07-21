<template>
    <section class="container container-custom">
		<div class="row my-3">

			<div class="col-sm-3 text-center"><img src="../assets/thumbgallery-1.jpg" class="img-fluid thumbnail" @click="openGallery(0)" /></div>
			<div class="col-sm-3 text-center"><img src="../assets/thumbgallery-2.jpg" class="img-fluid thumbnail" @click="openGallery(1)" /></div>
			<div class="col-sm-3 text-center"><img src="../assets/thumbgallery-3.jpg" class="img-fluid thumbnail" @click="openGallery(2)" /></div>
			<div class="col-sm-3 text-center"><img src="../assets/thumbgallery-4.jpg" class="img-fluid thumbnail" @click="openGallery(3)" /></div>
			
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
					thumb: 'https://darkstory2d.com/assets/images/gallery/gallery-1.jpg',
					src: 'https://darkstory2d.com/assets/images/gallery/gallery-1.jpg'
				},
				{
					thumb: 'https://darkstory2d.com/assets/images/gallery/gallery-2.jpg',
					src: 'https://darkstory2d.com/assets/images/gallery/gallery-2.jpg'
				},
				{
					thumb: 'https://darkstory2d.com/assets/images/gallery/gallery-3.jpg',
					src: 'https://darkstory2d.com/assets/images/gallery/gallery-3.jpg'
				},
				{
					thumb: 'https://darkstory2d.com/assets/images/gallery/gallery-4.jpg',
					src: 'https://darkstory2d.com/assets/images/gallery/gallery-4.jpg'
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