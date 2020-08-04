<template>
    <div style="height:90%;" ><!--position:absolute; v-scrollBar> -->
        <a-card title="uaserinf" style="">
            <a slot="extra" href="#" @click="con()">more</a>
            <div style="display:flex">

              <a-timeline>
                <a-timeline-item color="green">
                Create a services site 2015-09-01
                </a-timeline-item>
                <a-timeline-item color="green">
                Create a services site 2015-09-01
                </a-timeline-item>
                <a-timeline-item color="red">
                <p>Solve initial network problems 1</p>
                <p>Solve initial network problems 2</p>
                <p>Solve initial network problems 3 2015-09-01</p>
                </a-timeline-item>
            </a-timeline>
             <a-timeline mode="alternate">
                <router-link to='/user/info/test'>
                    <a-button>go</a-button>
                </router-link>
                
            </a-timeline>
            </div>
        </a-card>
        <router-view/>
    </div>
</template>
<script>
export default {
    name:'userinfo',
    created(){
        [
            {"title":"首页","route":"/Magic","path":"/Magic","icon":"unordered-list","component":"Layout","children":[{"title":"统计报表","route":"/Magic/report","path":"report","icon":"area-chart","component":"report/index","children":null},{"title":"统计报表2","route":"/Magic/assine","path":"assine","icon":"appstore","component":"assine/index","children":null}]},
            {"title":"内容管理","route":"/cloud","path":"/cloud","icon":"cloud","component":"Layout","children":[{"title":"素材管理","route":"/cloud/media","path":"Media","icon":"file-image","component":"cloud/media/index","children":null},{"title":"文件管理","route":"/cloud/files","path":"Files","icon":"file","component":"cloud/files/index","children":null}]},
            {"title":"用户信息","route":"/user","path":"/user","icon":"user","component":"Layout","children":
            [{"title":"个人信息","route":"/user/info","path":"info","icon":"edit","component":"userInfo/index",
            "children":[{
                "path": 'test',
                "route":'/user/info/test',
                "component": "userInfo/test/index",
                "title":'首页',
                "icon":'unordered-list',
            }]
            
            }]
        }
        ]
    },
    methods:{
        con(){
            console.log(global)
        }
    }
}
</script>
