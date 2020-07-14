<template>
    <div class="col-auto">
        <div v-bind:class="{'text-center navclass-item':true, 'active':item.active}" style="background:#f3cf8e;" @click="activeClass">
            <div style="height:100px; width:150px; background: #e0e0e0; margin:0 auto;"></div>
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