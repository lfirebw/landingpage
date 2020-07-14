<template>
    <div class="row mb-3 row-cont-1" v-if="item.active">
        <div class="col-sm-6 offset-sm-6" style="position:relative;">
            <div class="row h-100">
                <div class="col-6">
                    <div class="vivify animationObject driveInLeft" style="height:400px; width:300px;">
                        <div style="height:400px; width:300px; background: #e0e0e0; position: absolute; bottom: 0;"></div>
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
export default {
    props:['item'],
    data(){
        return {};
    }
}
</script>