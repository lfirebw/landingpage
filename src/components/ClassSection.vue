<template>
    <section id="classsection" class="container container-custom" style="background:#a36d49;">
		<ClassContent v-for="content in contents" :item="content" :key="content.id"></ClassContent>
		<div class="row justify-content-center">
			<ClassButtons v-for="(button,i) in buttons" :index="i" :item="button" :key="button.id" :data-id="button.id" v-on:active_classs="activeClass"></ClassButtons>
		</div>
	</section>
</template>

<script>
import ClassButtons from './ClassButtons.vue'
import ClassContent from './ClassContent.vue'

export default {
	data(){
		return {
			buttons: [
				{ id:1, classname:'Mage', targetId: 0,img:'12.png',shadowBoxColor:'#00eaff',imgactive:'12_c.png',active:true },
				{ id:2, classname:'Stalker', targetId: 1,img:'13.png',shadowBoxColor:'#709f34',imgactive:'13_c.png', active:false },
				{ id:3, classname:'Hunter', targetId: 2,img:'15.png',shadowBoxColor:'#921f80',imgactive:'15_c.png', active:false },
				{ id:4, classname:'Knight', targetId: 3,img:'17.png',shadowBoxColor:'#bd3232',imgactive:'17_c.png', active:false },
			],
			contents:[
				{ id:1, idbutton:0, classname: 'Mage', videoclass:'mago/magonew.mp4', imgclass:'Mago.png',imgAttrClass:"Mage",imgAttrStyle:{ transform:"scale(1.5)" }, classdesc: 'The Mage base his power on the elements and is able to canalize them in order to increase their secondary effects. He can attack from a short distance, nevertheless each hit deals a lot of damage.', active:true },
				{ id:2, idbutton:1, classname: 'Stalker', videoclass:'acechador/acechadornew.mp4',imgAttrClass:"Stalker",imgAttrStyle:{ transform:"scale(1.5)" }, imgclass:'stalker_image.png',classdesc: 'The Stalker is an shadow assassin, he uses his basic attacks to poison enemies and then fulminate them with his daggers. Also, he has the support of his “Battle Masters”, who grant an additional effect on each hit.', active:false },
				{ id:3, idbutton:2, classname: 'Hunter', videoclass:'cazador/cazadornew.mp4', imgclass:'Cazador.png',imgAttrClass:"Hunter", classdesc: 'The Hunter focuses his damage on long distance shots, is faster in comparisson to the other clases and can detect enemies even if they are behind him. He carry a quiver where he stores arrows some handy stuff as bombs and traps.', active:false },
				{ id:4, idbutton:3, classname: 'Knight', videoclass:'caballero/caballeronew.mp4', imgclass:'knight_image.png',imgAttrClass:"Knight", classdesc: 'The Knight uses light and darkness in his favor, is able to create attack combinations at will, making each combination deal a different effect on the opponent, also most of his attacks are melee.', active:false }
			],
			currentSelected : 0
		}
	},
	components:{
		ClassButtons,ClassContent
	},
	methods:{
        activeClass(index){
			this.currentSelected = index;
			this.buttons.forEach((el)=>{el.active = false;});
			this.contents.forEach((el)=>{el.active = false;});
			this.buttons[index].active = true;
			this.contents[this.buttons[index].targetId].active = true;
		},
    }
		
	
}
</script>