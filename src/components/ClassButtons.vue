<template>
    <div class="col-auto">
        <div v-bind:class="{'text-center navclass-item':true, 'active':item.active}" style="background:#d8cab8; border-radius: 0.4em;" @click="activeClass">
            <div style="height: 100px; width: 140px; background: rgb(60, 39, 20); margin: 0px auto; border-radius: 0.4em;">
                <!-- <img src="../assets/emblemas/12_c.png" style="width:67%;" /> -->
                <img :src="require(`../assets/emblemas/${item.active==false ? item.img : item.imgactive}`)" style="width:67%;" />
            </div>
            <h4>{{item.classname}}</h4>
        </div>
    </div>
</template>

<script>
export default {
    props:['item','index'],
    data(){
        return {
            isActive: false
        }
    },
    methods:{
        activeClass(){
            this.$emit('active_classs',this.index);
        }
    }
}
</script>