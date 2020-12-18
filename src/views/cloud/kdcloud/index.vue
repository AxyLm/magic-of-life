<template>
    <div id='ifKd'>
        <iframe src="http://kd.soulfree.cn/index.php?explorer" seamless class="iframe"/>
    </div>
</template>

<script>
    export default {
        created () {
            window.location.reload('')
        },
    }
</script>

<style lang="scss" scoped>
#ifKd{
    width: 100%;
    height: 100%;
    .iframe{
        width: 100%;
        height: 100%;  
    }
}
</style>