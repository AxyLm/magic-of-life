<template>
    <div id='report'>
        <a-table :data-source="pm2list" bordered :scroll="{x:true,y:false}">
          <a-table-column key='pm_id' title="序号" data-index='pm_id' :width='65' fixed='left'/>
          <a-table-column key='pid' title="进程" data-index='pid'/>
          <a-table-column key='name' title="名称" data-index='name'/>
          <a-table-column key='cpu' title="cpu(%)" data-index='cpu'/>
          <a-table-column key='memory' title="内存占用(kb)" data-index='memory'/>
          <a-table-column key='status' title="状态" data-index='status'/>
          <a-table-column key='exec_mode' title="模式" data-index='exec_mode'/>
          <a-table-column key='pm_exec_path' title="运行文件" data-index='pm_exec_path'/>
          <a-table-column key='exec_interpreter' title="语言" data-index='exec_interpreter'/>
          <a-table-column key='version' title="版本" data-index='version'/>
        </a-table>
    </div>
</template>
<script>
export default {
    name:'report',
    data() {
        return {
            pm2list:[{"pm_id":0,"pid":1529,"name":"frpc_ssh","status":"online","username":"root","pm_exec_path":"/home/frp/frp_0.33.0_linux_arm/start.sh","exec_mode":"fork_mode","pm_uptime":1600442265493,"created_at":1598163896185,"version":"N/A","exec_interpreter":"bash","memory":86016,"cpu":0},{"pm_id":1,"pid":1532,"name":"frpc_emqx","status":"online","username":"root","pm_exec_path":"/home/frp/frp_server/frpc_server.sh","exec_mode":"fork_mode","pm_uptime":1600442265505,"created_at":1598874132486,"version":"N/A","exec_interpreter":"bash","memory":86016,"cpu":0},{"pm_id":2,"pid":0,"name":"emqx","status":"errored","username":"root","pm_exec_path":"/home/emqx/start.sh","exec_mode":"fork_mode","pm_uptime":1600442798273,"created_at":null,"version":"N/A","exec_interpreter":"bash","memory":0,"cpu":0},{"pm_id":3,"pid":3176,"name":"start-linux","status":"stopped","username":"root","pm_exec_path":"/home/project/magic-of-life-web/start-linux","exec_mode":"fork_mode","pm_uptime":1600748255751,"created_at":1598587243242,"version":"1.0.0","exec_interpreter":"none","memory":0,"cpu":0},{"pm_id":4,"pid":1572,"name":"glances_web","status":"online","username":"root","pm_exec_path":"/home/glances/start.sh","exec_mode":"fork_mode","pm_uptime":1600442265665,"created_at":1598842284281,"version":"N/A","exec_interpreter":"bash","memory":86016,"cpu":0},{"pm_id":5,"pid":1582,"name":"glances_web_vue","status":"online","username":"root","pm_exec_path":"/home/glances/web-vue/start.js","exec_mode":"fork_mode","pm_uptime":1600442265808,"created_at":1598874783719,"version":"1.0.0","exec_interpreter":"node","memory":46465024,"cpu":0.4},{"pm_id":7,"pid":30824,"name":"fanConPwm","status":"online","username":"root","pm_exec_path":"/home/monit/fire/fanConPwm.py","exec_mode":"fork_mode","pm_uptime":1600571950750,"created_at":1600571950750,"version":"N/A","exec_interpreter":"python","memory":5611520,"cpu":0.7}],

        }
    },
    created(){
        console.log(process.env.NODE_ENV)
    },
}
</script>

<style lang="scss" scoped>
#report{
    background: #ffffff;
    padding: 10px;
}
    /deep/#report > div > div > div > div > div > div.ant-table-scroll > div{
        overflow-x: auto !important;
    }
    
</style>