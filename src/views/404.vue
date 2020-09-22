<template>
<a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
    <template #extra>
        <a-button type="primary">
            Back Home
        </a-button>
    </template>
</a-result>
</template>
<script>
export default {
    name:'err',
    data(){
        return{

        }
    },
    mounted(){
        
    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>
</style>
