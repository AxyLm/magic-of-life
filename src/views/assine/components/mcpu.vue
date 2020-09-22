<template id='mcpu'>
  <div>
    <a-skeleton active :loading='!(percpu && percpu.length>0)' :paragraph="{ rows: 2 }"  :title='false'>
      <a-progress
        :percent="item.total"
        size="small"
        status="active"
        v-for="item in percpu"
        :key="item.cpu_number"
      />
    </a-skeleton>
  </div>
</template>
<script>
export default {
  name:'mCpu',
  props: {
    info: {
      default: 1,
    },
    percpu: {
      type: Array,
      default: ()=>{
        return []
      },
    },
  },
  updated() {
    // console.log(this.percpu);
  },
  created() {
    // console.log("cpu");
  },
  mounted() {
    // console.log(this.percpu);
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
