<template>
  <div id="report">
    <a-skeleton
      active
      :loading="!pm2list.length"
      :paragraph="{ rows: 6 }"
      :title="false"
    >
      <a-table :data-source="pm2list" bordered :scroll="{ x: true, y: false }">
        <!-- <a-table-column key='pm_id' title="序号" data-index='pm_id' :width='65' fixed='left'/> -->
        <a-table-column key="pid" title="进程" data-index="pid" />
        <a-table-column key="name" title="名称" data-index="name" />
        <a-table-column key="cpu" title="cpu(%)" data-index="cpu" />
        <a-table-column key="memory" title="内存占用(kb)" data-index="memory" />
        <a-table-column key="exec_mode" title="模式" data-index="exec_mode" />
        <a-table-column
          key="pm_exec_path"
          title="运行文件"
          data-index="pm_exec_path"
        />
        <a-table-column
          key="exec_interpreter"
          title="语言"
          data-index="exec_interpreter"
        />
        <a-table-column key="version" title="版本" data-index="version" />
        <a-table-column
          key="status"
          title="状态"
          data-index="status"
          fixed="right"
        >
          <template slot-scope="status">
            <span>
              <a-tag :color="tagColor(status)">{{ status }}</a-tag>
            </span>
          </template>
        </a-table-column>
      </a-table>
    </a-skeleton>
  </div>
</template>
<script>
export default {
  name: "report",
  data() {
    return {
      pm2list: [],
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
      this.$axios
        .post("/api/v1/pm2_monit", {
          authToken: "ad9971d1f97qE11d9f7e",
        })
        .then((data) => {
          if (data.res == 0) {
            this.pm2list = data.data;
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