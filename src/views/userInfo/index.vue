<template>
    <div style="height:90%;" ><!--position:absolute; v-scrollBar> -->
        <a-card style="height:100%"  :bodyStyle="{'height':'100%'}">
            <a-row style="height:100%" >
                <a-col :span='6'>
                    <a-avatar size="large" :src="queryUser().avatar"></a-avatar>
                </a-col>
                <a-divider type="vertical" style="height:100%"/>
                <a-col :span='18'>

                </a-col>
            </a-row>
        </a-card>
    </div>
</template>
<script>
export default {
    name:'userinfo',
    data(){
        return{
            taglist:[]
        }
    },
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
        queryUser(){
            return JSON.parse(localStorage.getItem('userInfo'))
        },
        shuffle(){
            for (let i = 1; i < this.taglist.length; i++){
                var random = Math.floor(Math.random() * (i + 1));
                [this.taglist[i], this.taglist[random]] = [this.taglist[random], this.taglist[i]];
            }
        },
        addtag(){
           console.log( Math.random(0,1)*this.taglist.length.toFixed(0))
            this.taglist.splice(Math.random(0,1)*this.taglist.length.toFixed(0),0,this.taglist.length)
        },
        con(){
            console.log(global)
        }
    }
}
</script>
<style lang="scss" scoped>

.slide-fade-enter-active {
  transition: all .33s ease-in;

}
.slide-fade-leave-active {
  transition: all .33s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  transform: translateX(100px);
}
.slide-fade-enter, .slide-fade-leave-to{
  opacity: 0;
}
</style>
