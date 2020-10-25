<template>
    <section class="container container-custom">
		<VueSlickCarousel :arrows="false" :dots="false" :autoplay="true" :slidesPerRow="1" :slidesToScroll="1" :slidesToShow="4" :responsive="respScreen" >
			<div class="text-center" ><img src="../assets/thumbgallery-1.jpg" class="mx-auto img-fluid thumbnail" @click="openGallery(0)"  /></div>
			<div class="text-center" ><img src="../assets/thumbgallery-2-2.jpg" class="mx-auto img-fluid thumbnail" @click="openGallery(1)"  /></div>
			<div class="text-center" ><img src="../assets/thumbgallery-3.jpg" class="mx-auto img-fluid thumbnail" @click="openGallery(2)"  /></div>
			<div class="text-center" ><img src="../assets/thumbgallery-4-4.jpg" class="mx-auto img-fluid thumbnail" @click="openGallery(3)"  /></div>
		</VueSlickCarousel>
		<LightBox ref="lightbox" :show-light-box="false" :media="media"></LightBox>
	</section>
</template>

<script>
import LightBox from 'vue-it-bigger'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
/**IMAGES */
import imgSlider1 from '../assets/Mounts_System.jpg'
import imgSlider2 from '../assets/DarkStory0.jpg'
import imgSlider3 from '../assets/DarkStoryEdited1.jpg'
import('vue-it-bigger/dist/vue-it-bigger.min.css')

export default {
	components:{
		LightBox,VueSlickCarousel
	},	
	data(){
		return {
			media: [
				{ thumb: imgSlider1, src: imgSlider1 },
				{ thumb: imgSlider2, src: imgSlider2 },
				{
					thumb: 'https://darkstory2d.com/assets/images/gallery/gallery-3.jpg',
					src: 'https://darkstory2d.com/assets/images/gallery/gallery-3.jpg'
				},
				{ thumb: imgSlider3, src: imgSlider3 }
			],
			respScreen:[
				{
					"breakpoint":1024,
					"settings":{
						"slidesToShow": 3,
					}
				},
				{
					"breakpoint": 480,
					"settings": {
						"slidesToShow": 2,
					}
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