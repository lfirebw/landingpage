<template>
    <section class="container container-custom" style="background:#a36d49;">
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
				{ id:1, classname:'Mage', targetId: 0,img:'12.png',imgactive:'12_c.png',active:true },
				{ id:2, classname:'Tipo 2', targetId: 1,img:'13.png',imgactive:'13_c.png', active:false },
				{ id:3, classname:'Tipo 3', targetId: 2,img:'15.png',imgactive:'15_c.png', active:false },
				{ id:4, classname:'Tipo 4', targetId: 3,img:'17.png',imgactive:'17_c.png', active:false },
			],
			contents:[
				{ id:1, idbutton:0, classname: 'Mage',classdesc: 'Descripcion de la clases, caracterisitca, breve resumen de la clase para iniciar a jugar con darkstory 2d online', active:true },
				{ id:2, idbutton:1, classname: 'Tipo 2',classdesc: 'Otra descripcion', active:false },
				{ id:3, idbutton:2, classname: 'Tipo 3',classdesc: 'Otra descripcion', active:false },
				{ id:4, idbutton:3, classname: 'Tipo 4',classdesc: 'Otra descripcion', active:false }
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