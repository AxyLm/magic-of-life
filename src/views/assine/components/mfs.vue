<template>
  <div>
      <a-skeleton active 
      :loading='!(fsList && fsList.length>0)' 
      :paragraph="{ rows: 2 }">
        <a-progress :percent="item.percent" size="small" status="active" v-for="item in fsList" :key='item.mnt_point' :stroke-color="active(item.percent)"/>
      </a-skeleton>
  </div>
</template>

<script>
export default {
  name: "mfs",
  props: {
    fsList: {
      type: Array,
      default: ()=>{
        return []
      },
    },
  },
  computed: {
    active() {
      return function (val) {
        if (val >= 90) {
          return {
            "0%": "#f0362d",
            "100%": "#f0362d",
          };
        }
        if (val >= 50) {
          return {
            "0%": "#fd6833",
            "100%": "#fd6833",
          };
        }
      };
    },
  },
  created() {
    // console.log("fs create");
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>