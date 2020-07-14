<template>
    <section class="container container-custom" style="background:#583a03;">
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
				{ id:1, classname:'Tipo 1', targetId: 0,active:true },
				{ id:2, classname:'Tipo 2', targetId: 1,active:false },
			],
			contents:[
				{ id:1, idbutton:0, classname: 'Tipo 1',classdesc: 'Descripcion de la clases, caracterisitca, breve resumen de la clase para iniciar a jugar con darkstory 2d online', active:true },
				{ id:2, idbutton:1, classname: 'Tipo 2',classdesc: 'Otra descripcion', active:false }
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