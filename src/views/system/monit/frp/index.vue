<template>
  <div id="report">
    <a-skeleton
      active
      :loading="tableLoading"
      :paragraph="{ rows: 6 }"
      :title="false"
    >
      <a-table :data-source="frpList"  :scroll="{ x: true, y: false }" :pagination='false'>
        <!-- <p slot="expandedRowRender" slot-scope="record" style="margin: 0">
          {{ record.description }}
        </p> -->
        <a-table-column
          key="status"
          title="状态"
          data-index="status"
          :width='50'
        >
          <template slot-scope="status">
            <span>
              <a-tag :color="tagColor(status)">{{ status }}</a-tag>
            </span>
          </template>
        </a-table-column>
        <!-- <a-table-column key='pm_id' title="序号" data-index='pm_id' :width='65' fixed='left'/> -->
        <a-table-column key="name" title="名称" data-index="name" />
        <a-table-column key="Proxies" title="Proxies" data-index="Proxies" />
        <a-table-column key="last_start_time" title="last_start" data-index="last_start_time" />
        <a-table-column key="last_close_time" title="last_close" data-index="last_close_time" />
        <a-table-column key="cpu" title="in" data-index="today_traffic_in" />
        <a-table-column key="memory" title="out" data-index="today_traffic_out" />
        
      </a-table>
    </a-skeleton>
  </div>
</template>
<script>
export default {
  name: "report",
  data() {
    return {
      frpList: [],
      tableLoading:true
    };
  },
  created() {
    this.initTable();
  },
  methods: {
    tagColor(status){
      if(status == 'online'){
        return 'green'
      }
      if(status == 'errored'){
        return 'red'
      }
      if(status == 'stopped'){
        return ''
      }
    },
    initTable() {
      this.$axios.post("/monit/frpMonit", {
        type: "/http",
      })
      .then((res) => {
        if (res.code == 0) {
          for (const item of res.data.proxies) {
            item.Proxies = 'http'
          }
          this.frpList = this.frpList.concat(res.data.proxies)
          this.tableLoading = false
        }
      });
      this.$axios.post("/monit/frpMonit", {
        type: "/tcp",
      })
      .then((res) => {
        if (res.code == 0) {
          for (const item of res.data.proxies) {
            item.Proxies = 'tcp'
          }
          this.frpList = this.frpList.concat(res.data.proxies)
          this.tableLoading = false
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#report {
  background: #ffffff;
  padding: 10px;
}
/deep/#report > div > div > div > div > div > div.ant-table-scroll > div {
  overflow-x: auto !important;
}
</style>