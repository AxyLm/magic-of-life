<template>
    <div>
      <a-card title="assine" style="width: 300px">
            <i slot="extra" href="#" @click="con()">more</i>
             <a-empty />
        </a-card>
    </div>
</template>
<script>
export default {
    name:'assine',
    methods:{
        con(){
            console.log(global)
        }
    }
}
</script>
